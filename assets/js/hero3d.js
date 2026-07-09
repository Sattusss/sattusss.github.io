/* =========================================================
   Immersive WebGL hero  ·  Three.js neural constellation
   Netflix-red · reacts to mouse + scroll · mobile fallback
   ========================================================= */
(() => {
  "use strict";

  const canvas = document.getElementById("hero3d");
  if (!canvas) return;

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function webglOK() {
    try {
      const c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
    } catch (e) { return false; }
  }

  // If Three failed to load, or WebGL/motion unavailable → keep the 2D neural fallback (#ai-net)
  if (typeof THREE === "undefined" || reduce || !webglOK()) { canvas.style.display = "none"; return; }

  // 3D is active → hide the flat fallback canvas
  const flat = document.getElementById("ai-net");
  if (flat) flat.style.display = "none";

  const hero = canvas.parentElement;
  const small = innerWidth < 640 || matchMedia("(pointer: coarse)").matches;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !small, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.5 : 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x090509, 0.045);

  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 120);
  camera.position.set(0, 0, 19);

  /* ---- glow sprite (generated, no external asset) ---- */
  function glowTexture() {
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const g = c.getContext("2d");
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, "rgba(255,255,255,1)");
    gr.addColorStop(0.25, "rgba(255,95,105,0.95)");
    gr.addColorStop(0.6, "rgba(229,9,20,0.5)");
    gr.addColorStop(1, "rgba(229,9,20,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }
  const sprite = glowTexture();

  /* ---- neural constellation (nodes in a sphere volume) ---- */
  const N = small ? 95 : 230;
  const R = 9.5;
  const nodes = [];
  const npos = [];
  for (let i = 0; i < N; i++) {
    let v;
    do { v = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1); }
    while (v.lengthSq() > 1);
    v.multiplyScalar(R * (0.32 + 0.68 * Math.random()));
    nodes.push(v); npos.push(v.x, v.y, v.z);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.Float32BufferAttribute(npos, 3));
  const pMat = new THREE.PointsMaterial({
    size: small ? 0.62 : 0.5, map: sprite, color: 0xff414c,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
  });
  const points = new THREE.Points(pGeo, pMat);

  /* ---- links between nearby nodes ---- */
  const lpos = [];
  const maxDist = small ? 3.4 : 2.9;
  const maxLines = small ? 240 : 760;
  let lc = 0;
  for (let i = 0; i < N && lc < maxLines; i++) {
    for (let j = i + 1; j < N && lc < maxLines; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        lpos.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        lc++;
      }
    }
  }
  const lGeo = new THREE.BufferGeometry();
  lGeo.setAttribute("position", new THREE.Float32BufferAttribute(lpos, 3));
  const lMat = new THREE.LineBasicMaterial({ color: 0xe50914, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false });
  const links = new THREE.LineSegments(lGeo, lMat);

  const core = new THREE.Group();
  core.add(points); core.add(links);
  scene.add(core);

  /* ---- deep starfield for parallax depth ---- */
  const sfN = small ? 130 : 340;
  const sfPos = [];
  for (let i = 0; i < sfN; i++) sfPos.push((Math.random() * 2 - 1) * 45, (Math.random() * 2 - 1) * 32, (Math.random() * 2 - 1) * 45 - 24);
  const sfGeo = new THREE.BufferGeometry();
  sfGeo.setAttribute("position", new THREE.Float32BufferAttribute(sfPos, 3));
  const sfMat = new THREE.PointsMaterial({ size: 0.18, map: sprite, color: 0xff7b82, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  const stars = new THREE.Points(sfGeo, sfMat);
  scene.add(stars);

  /* ---- interaction ---- */
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener("mousemove", e => { mouse.tx = (e.clientX / innerWidth) * 2 - 1; mouse.ty = (e.clientY / innerHeight) * 2 - 1; });
  let scrollY = 0;
  addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  resize();
  addEventListener("resize", resize);
  addEventListener("load", resize);
  // hero grows after portfolio.js fills text/stats → keep the canvas in sync
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(hero);

  /* ---- render loop (paused when hero off-screen) ---- */
  const clock = new THREE.Clock();
  let raf = 0;
  function tick() {
    const t = clock.getElapsedTime();
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;

    core.rotation.y = t * 0.05 + scrollY * 0.0016 + mouse.x * 0.5;
    core.rotation.x = Math.sin(t * 0.13) * 0.12 + mouse.y * 0.35;
    stars.rotation.y = t * 0.015;

    camera.position.x += (mouse.x * 3.2 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 2.2 - camera.position.y) * 0.04;
    camera.position.z = 19 + Math.min(scrollY, 700) * 0.011;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }
  function start() { if (!raf) raf = requestAnimationFrame(tick); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  start();

  // pause rendering while the hero is scrolled out of view (battery/perf)
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? start() : stop()), { threshold: 0 }).observe(hero);
  }
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
})();
