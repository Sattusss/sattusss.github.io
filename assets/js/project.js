/* =========================================================
   Animated project flowchart  ·  project.html?p=<slug>
   Bilingual EN / 日本語 · light theme
   ========================================================= */
(() => {
  "use strict";

  /* ---------------- icons ---------------- */
  const S = (p, o = {}) => `<svg viewBox="0 0 24 24" fill="${o.f || "none"}" stroke="${o.f ? "none" : "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const I = {
    upload: S('<path d="M12 16V4m0 0 4 4m-4-4-4 4"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>'),
    doc: S('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'),
    scan: S('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 4v16"/>'),
    scissors: S('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.5 15.5M14.5 14 20 20M8.5 8.5 12 12"/>'),
    database: S('<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>'),
    search: S('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
    brain: S('<path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0 0 6 3 3 0 0 0 6 0 3 3 0 0 0 0-6 3 3 0 0 0-3-3Z"/><path d="M12 5V3M9 8H6m12 0h-3m-3 11v2"/>'),
    report: S('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'),
    mic: S('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'),
    wave: S('<path d="M3 12h2l2-6 3 14 3-12 2 8 2-4h4"/>'),
    speaker: S('<path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16 9a3 3 0 0 1 0 6m3-9a7 7 0 0 1 0 12"/>'),
    monitor: S('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    terminal: S('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>'),
    chip: S('<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2"/>'),
    sparkles: S('<path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 14l.7 1.8 1.8.7-1.8.7L19 19l-.7-1.8-1.8-.7 1.8-.7z"/>'),
    form: S('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>'),
    sliders: S('<path d="M4 6h10m4 0h2M4 12h2m4 0h10M4 18h12m4 0h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>'),
    activity: S('<path d="M3 12h4l3 8 4-16 3 8h4"/>'),
    camera: S('<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><circle cx="12" cy="12.5" r="3.5"/>'),
    box: S('<rect x="4" y="4" width="16" height="16" rx="2" stroke-dasharray="4 3"/><path d="M9 9h6v6H9z"/>'),
    face: S('<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M8.5 15a4 4 0 0 0 7 0"/>'),
    mail: S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    key: S('<circle cx="8" cy="14" r="4"/><path d="m11 11 9-9m-3 0 3 3m-6 0 2 2"/>'),
    plug: S('<path d="M9 3v6m6-6v6M6 9h12v3a6 6 0 0 1-12 0V9ZM12 18v3"/>'),
    filter: S('<path d="M3 5h18l-7 8v6l-4-2v-4z"/>'),
    bulb: S('<path d="M9 18h6m-5 3h4M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.4-1 2.5H9c0-1.1-.3-1.8-1-2.5A6 6 0 0 1 12 3Z"/>'),
    gear: S('<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/>'),
    table: S('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>'),
    rank: S('<path d="M5 21V9m7 12V3m7 18v-7"/>'),
  };

  /* ---------------- flow data ---------------- */
  const FLOWS = {
    "ai-design-review": {
      cat: "LLM · RAG", g: "g1",
      title: { en: "AI Network Design Review System", ja: "AIネットワーク設計レビューシステム" },
      tagline: { en: "How a RAG pipeline reviews design docs against device configs", ja: "RAGパイプラインが設計書と実機コンフィグを照合する仕組み" },
      stack: ["Python", "Django", "LangChain", "ChromaDB", "Gemini", "Claude", "PostgreSQL"],
      steps: [
        { ic: I.upload, t: { en: "Upload Documents", ja: "ドキュメント投入" }, d: { en: "Engineer uploads multi-format design docs & device configs (PDF / PPTX / DOCX / XLSX).", ja: "設計書と実機コンフィグ（PDF/PPTX/DOCX/XLSX）をアップロード。" } },
        { ic: I.scan, t: { en: "Parse & Selective OCR", ja: "解析・選択的OCR" }, d: { en: "Extract text, tables & topology; Tesseract OCR only on low-quality pages; PPTX→PDF.", ja: "テキスト・表・トポロジーを抽出。低品質ページのみTesseract OCR。PPTX→PDF変換。" } },
        { ic: I.scissors, t: { en: "Chunk & Embed", ja: "チャンク化・埋め込み" }, d: { en: "Split content into chunks and embed with sentence-transformers.", ja: "コンテンツをチャンク化し、sentence-transformersで埋め込み生成。" } },
        { ic: I.database, t: { en: "Index in Vector DB", ja: "ベクトルDBへ格納" }, d: { en: "Store embeddings in ChromaDB for fast hybrid retrieval.", ja: "埋め込みをChromaDBに格納し、ハイブリッド検索に備える。" } },
        { ic: I.search, t: { en: "Hybrid Retrieval", ja: "ハイブリッド検索" }, d: { en: "Retrieve the most relevant design & config sections for each check.", ja: "各チェックに最も関連する設計・コンフィグ箇所を取得。" } },
        { ic: I.brain, t: { en: "LLM Review", ja: "LLMレビュー" }, d: { en: "Orchestrate Gemini & Claude to compare design vs config and flag differences.", ja: "Gemini・Claudeをオーケストレーションし、設計とコンフィグの差異を検出。" } },
        { ic: I.report, t: { en: "Review Report", ja: "レビューレポート" }, d: { en: "Django web app presents discrepancies, evidence & a reviewable report.", ja: "Django Webアプリが差異・根拠・レビュー結果を提示。" } },
      ],
    },
    "medical-similarity": {
      cat: "LLM · Embeddings", g: "g2",
      title: { en: "Medical Document Similarity & EMR", ja: "医療文書 類似度分析・EMR" },
      tagline: { en: "Ranking related clinical records with Transformer embeddings", ja: "Transformer埋め込みで関連する臨床記録をランク付け" },
      stack: ["Transformers", "Amazon Bedrock", "scikit-learn", "Streamlit", "Pyvis"],
      steps: [
        { ic: I.upload, t: { en: "Ingest EMR (JSON)", ja: "EMR取り込み（JSON）" }, d: { en: "Load electronic medical records and clinical evaluation data.", ja: "電子カルテ（EMR）と医療評価データを読み込み。" } },
        { ic: I.filter, t: { en: "Preprocess", ja: "前処理" }, d: { en: "Clean & normalize medical text; hybrid rule + ML absorbs expression variance.", ja: "医療テキストを正規化。ルール＋MLのハイブリッドで表現差異を吸収。" } },
        { ic: I.chip, t: { en: "Embed (Transformers)", ja: "埋め込み生成（Transformers）" }, d: { en: "Generate embeddings with OpenAI / Cohere / Amazon Titan models.", ja: "OpenAI・Cohere・Amazon Titanで埋め込みを生成。" } },
        { ic: I.search, t: { en: "Similarity & Rank", ja: "類似度・ランキング" }, d: { en: "TF-IDF + cosine similarity + KNN retrieve and rank related documents.", ja: "TF-IDF＋コサイン類似度＋KNNで関連文書を検索・ランク付け。" } },
        { ic: I.activity, t: { en: "Benchmark (AUROC / F1)", ja: "評価（AUROC / F1）" }, d: { en: "Offline evaluation & error analysis pick the best-performing model.", ja: "オフライン評価と誤り分析で最適モデルを選定。" } },
        { ic: I.monitor, t: { en: "Visualize (Streamlit)", ja: "可視化（Streamlit）" }, d: { en: "EMR management UI plus an interactive similarity graph (Pyvis).", ja: "EMR管理UIと、類似度グラフの可視化（Pyvis）。" } },
      ],
    },
    "speech-ai": {
      cat: "NLP · Speech", g: "g3",
      title: { en: "Real-Time Speech AI (ASR / TTS)", ja: "リアルタイム音声AI（ASR / TTS）" },
      tagline: { en: "Hands-free voice control loop with low-latency ASR & TTS", ja: "低レイテンシなASR・TTSによるハンズフリー音声操作ループ" },
      stack: ["Faster-Whisper", "CTranslate2", "VITS", "ESPnet", "PyTorch", "Streamlit"],
      steps: [
        { ic: I.mic, t: { en: "Voice Input", ja: "音声入力" }, d: { en: "User speaks a command; Streamlit captures live audio.", ja: "ユーザーが音声でコマンドを入力。Streamlitがライブ録音。" } },
        { ic: I.wave, t: { en: "ASR · Faster-Whisper", ja: "音声認識・Faster-Whisper" }, d: { en: "Transcribe speech to text; CTranslate2 keeps inference fast & light.", ja: "音声をテキスト化。CTranslate2で推論を高速・軽量化。" } },
        { ic: I.gear, t: { en: "Intent Matching", ja: "意図マッチング" }, d: { en: "String-matching post-processing maps the text to a data action.", ja: "文字列マッチングの後処理でテキストをデータ操作へ対応付け。" } },
        { ic: I.database, t: { en: "Data Action", ja: "データ操作" }, d: { en: "Add / edit / delete a record entirely hands-free.", ja: "ハンズフリーでデータの登録・修正・削除を実行。" } },
        { ic: I.speaker, t: { en: "TTS · VITS", ja: "音声合成・VITS" }, d: { en: "Synthesize a spoken confirmation of the result.", ja: "処理結果の確認音声を合成。" } },
        { ic: I.wave, t: { en: "Audio Response", ja: "音声応答" }, d: { en: "Auto-play the response back to the user, closing the loop.", ja: "応答を自動再生し、操作ループを完結。" } },
      ],
    },
    "blog-generator": {
      cat: "LLM · GenAI", g: "g1",
      title: { en: "AI Blog Generator (LLaMA 2)", ja: "AIブログ生成（LLaMA 2）" },
      tagline: { en: "Turning a prompt into a full blog post with a local LLM", ja: "ローカルLLMでプロンプトからブログ記事を生成" },
      stack: ["LLaMA 2", "LangChain", "CTransformers", "Streamlit"],
      steps: [
        { ic: I.form, t: { en: "Prompt & Parameters", ja: "プロンプト・条件入力" }, d: { en: "User enters topic, writing style and target word count.", ja: "トピック・文体・語数などの条件を入力。" } },
        { ic: I.terminal, t: { en: "LangChain Prompt", ja: "LangChainプロンプト" }, d: { en: "Build a prompt template and the generation flow.", ja: "プロンプトテンプレートと生成フローを構築。" } },
        { ic: I.chip, t: { en: "LLaMA 2 (local)", ja: "LLaMA 2（ローカル）" }, d: { en: "CTransformers runs the LLaMA 2 model fully on-device.", ja: "CTransformersでLLaMA 2をローカル実行。" } },
        { ic: I.sparkles, t: { en: "Generate Draft", ja: "本文生成" }, d: { en: "The model writes a coherent blog post to the given conditions.", ja: "条件に沿った一貫性のあるブログ記事を生成。" } },
        { ic: I.monitor, t: { en: "Streamlit UI", ja: "Streamlit UI" }, d: { en: "Display the generated article in an interactive interface.", ja: "生成された記事をインタラクティブに表示。" } },
      ],
    },
    "multi-disease": {
      cat: "ML · Healthcare", g: "g2",
      title: { en: "Multi-Disease Prediction System", ja: "複数疾患予測システム" },
      tagline: { en: "Routing clinical inputs to per-disease ML & DL models", ja: "臨床データを疾患別のML・DLモデルへ振り分け" },
      stack: ["scikit-learn", "FNN", "LSTM", "Pandas", "Streamlit"],
      steps: [
        { ic: I.form, t: { en: "Clinical Inputs", ja: "臨床データ入力" }, d: { en: "User enters health metrics through a form.", ja: "ユーザーが健康指標をフォームから入力。" } },
        { ic: I.sliders, t: { en: "Preprocess", ja: "前処理" }, d: { en: "Clean and scale features (e.g. PIMA dataset).", ja: "特徴量のクレンジング・スケーリング（PIMA等）。" } },
        { ic: I.filter, t: { en: "Route to Model", ja: "モデル振り分け" }, d: { en: "Select the heart / diabetes / Parkinson's model.", ja: "心臓病・糖尿病・パーキンソン病のモデルを選択。" } },
        { ic: I.activity, t: { en: "Predict (ML / DL)", ja: "予測（ML / DL）" }, d: { en: "ML and deep-learning models (FNN, LSTM) estimate risk.", ja: "機械学習と深層学習（FNN・LSTM）でリスクを推定。" } },
        { ic: I.monitor, t: { en: "Result & Visualize", ja: "結果・可視化" }, d: { en: "Show the prediction in a Streamlit interface.", ja: "予測結果をStreamlit UIで表示。" } },
      ],
    },
    "sales-dashboard": {
      cat: "Data · BI", g: "g2",
      title: { en: "Sales Performance Dashboard", ja: "売上パフォーマンス分析ダッシュボード" },
      tagline: { en: "From raw sales data to interactive BI insights", ja: "生の売上データからインタラクティブなBIインサイトへ" },
      stack: ["Power BI", "Power Query", "DAX", "SQL Server"],
      steps: [
        { ic: I.plug, t: { en: "Connect Data", ja: "データ接続" }, d: { en: "Integrate multiple sales datasets into one model.", ja: "複数の販売データを統合しデータモデル化。" } },
        { ic: I.filter, t: { en: "Clean (Power Query)", ja: "整形（Power Query）" }, d: { en: "Cleanse and transform the data for analysis.", ja: "分析向けにデータをクレンジング・変換。" } },
        { ic: I.gear, t: { en: "Model & DAX KPIs", ja: "モデル化・DAX KPI" }, d: { en: "Define KPIs - revenue, quantity, repeat rate - with DAX.", ja: "売上・数量・リピート率などのKPIをDAXで定義。" } },
        { ic: I.table, t: { en: "Visualize", ja: "可視化" }, d: { en: "Build an interactive dashboard by category, region & customer.", ja: "カテゴリ別・地域別・顧客別のダッシュボードを構築。" } },
        { ic: I.bulb, t: { en: "Insights", ja: "インサイト" }, d: { en: "Surface trends that drive business decisions.", ja: "意思決定につながるトレンドを抽出。" } },
      ],
    },
    "emotion-detection": {
      cat: "ML · Computer Vision", g: "g3",
      title: { en: "Facial Emotion Detection", ja: "表情感情検出システム" },
      tagline: { en: "Classifying emotions from faces across a 16k-image dataset", ja: "1.6万枚の顔画像データセットから感情を分類" },
      stack: ["OpenCV", "scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
      steps: [
        { ic: I.camera, t: { en: "Capture Image", ja: "画像取得" }, d: { en: "Read a facial image from the camera or dataset (~16k images).", ja: "カメラまたはデータセット（約1.6万枚）から顔画像を取得。" } },
        { ic: I.face, t: { en: "Face Detect (OpenCV)", ja: "顔検出（OpenCV）" }, d: { en: "Detect the face, convert to grayscale and preprocess.", ja: "顔を検出し、グレースケール化・前処理。" } },
        { ic: I.sliders, t: { en: "Extract Features", ja: "特徴量抽出" }, d: { en: "Engineer expression features for classification.", ja: "分類に向けた表情特徴量を設計。" } },
        { ic: I.brain, t: { en: "Classify", ja: "分類" }, d: { en: "Compare KNN, Logistic Regression, Naïve Bayes & Random Forest.", ja: "KNN・ロジスティック回帰・ナイーブベイズ・ランダムフォレストを比較。" } },
        { ic: I.activity, t: { en: "Emotion + Eval", ja: "感情出力・評価" }, d: { en: "Output the emotion; evaluate with confusion matrix & heatmaps.", ja: "感情を出力し、混同行列・ヒートマップで評価。" } },
      ],
    },
    "voice-email": {
      cat: "NLP · Accessibility", g: "g3",
      title: { en: "Voice-Based Email (Accessibility)", ja: "音声メールシステム（アクセシビリティ）" },
      tagline: { en: "Operating email entirely by voice for visually impaired users", ja: "視覚障がい者が音声のみでメールを操作" },
      stack: ["Django", "SpeechRecognition", "Gmail API", "Bootstrap", "SQLite"],
      steps: [
        { ic: I.key, t: { en: "Voice Login", ja: "音声ログイン" }, d: { en: "User signs in by voice with email-ID / password auth.", ja: "メールID／パスワード認証で音声ログイン。" } },
        { ic: I.mic, t: { en: "Speech → Text", ja: "音声→テキスト" }, d: { en: "SpeechRecognition converts spoken commands to text.", ja: "SpeechRecognitionで音声コマンドをテキスト化。" } },
        { ic: I.gear, t: { en: "Choose Action", ja: "操作選択" }, d: { en: "Compose / Inbox / Sent / Trash - all selected by voice.", ja: "作成・受信箱・送信済み・ゴミ箱を音声で選択。" } },
        { ic: I.mail, t: { en: "Gmail API", ja: "Gmail API" }, d: { en: "Send and fetch email through the Gmail API.", ja: "Gmail APIでメールを送受信。" } },
        { ic: I.speaker, t: { en: "Audio Feedback", ja: "音声フィードバック" }, d: { en: "Read results aloud, guiding the user step by step.", ja: "結果を読み上げ、操作をガイド。" } },
      ],
    },
    "object-recognition": {
      cat: "ML · Computer Vision", g: "g3",
      title: { en: "Real-Time Object Recognition", ja: "リアルタイム物体認識" },
      tagline: { en: "Detecting objects from a live feed and announcing them by audio", ja: "ライブ映像から物体を検出し音声で通知" },
      stack: ["TensorFlow", "OpenCV", "Streamlit", "Python"],
      steps: [
        { ic: I.camera, t: { en: "Camera Feed", ja: "カメラ入力" }, d: { en: "Capture live video frames from the camera.", ja: "カメラからライブ映像フレームを取得。" } },
        { ic: I.chip, t: { en: "Detect (TensorFlow)", ja: "検出（TensorFlow）" }, d: { en: "A trained model identifies objects in each frame.", ja: "学習済みモデルが各フレームの物体を識別。" } },
        { ic: I.box, t: { en: "Annotate (OpenCV)", ja: "描画（OpenCV）" }, d: { en: "Draw bounding boxes and labels with confidence scores.", ja: "バウンディングボックスとラベル・信頼度を描画。" } },
        { ic: I.speaker, t: { en: "Audio Announce", ja: "音声通知" }, d: { en: "Speak the detected objects to assist visually impaired users.", ja: "検出した物体を音声で通知し、視覚障がい者を支援。" } },
      ],
    },
  };

  /* ---------------- i18n (page chrome) ---------------- */
  const UI = {
    en: { back: "Back to portfolio", how: "How it works", flow: "Data flow", stack: "Tech stack", replay: "Replay animation", step: "Step", input: "Input", output: "Output", missing: "Project not found" },
    ja: { back: "ポートフォリオに戻る", how: "仕組み", flow: "データフロー", stack: "技術スタック", replay: "アニメーション再生", step: "ステップ", input: "入力", output: "出力", missing: "プロジェクトが見つかりません" },
  };

  /* ---------------- state ---------------- */
  let lang = localStorage.getItem("st_lang") || "en";
  const slug = new URLSearchParams(location.search).get("p");
  const flow = FLOWS[slug];

  const el = (id) => document.getElementById(id);

  function render() {
    const t = UI[lang];
    document.documentElement.lang = lang === "ja" ? "ja" : "en";

    if (!flow) {
      el("app").innerHTML = `<div class="notfound"><h1>${t.missing}</h1><a class="btn" href="index.html#projects">${t.back}</a></div>`;
      return;
    }

    document.title = `${flow.title[lang]} - ${UI[lang].flow}`;

    const n = flow.steps.length;
    const nodes = flow.steps.map((s, i) => {
      const tag = i === 0 ? t.input : i === n - 1 ? t.output : `${t.step} ${String(i + 1).padStart(2, "0")}`;
      const kind = i === 0 ? "start" : i === n - 1 ? "end" : "mid";
      return `
        <li class="fnode fnode--${kind}" style="--i:${i}" data-reveal>
          <div class="fnode__rail"><span class="fnode__dot">${i + 1}</span></div>
          <div class="fnode__card">
            <div class="fnode__top"><span class="fnode__ic">${s.ic}</span><span class="fnode__tag">${tag}</span></div>
            <h3>${s.t[lang]}</h3>
            <p>${s.d[lang]}</p>
          </div>
        </li>`;
    }).join("");

    el("app").innerHTML = `
      <header class="phead ${flow.g}">
        <div class="phead__bar">
          <a class="back" href="index.html#projects">${arrowL()} <span>${t.back}</span></a>
          <div class="lang" id="lang-toggle">
            <span class="pill"></span>
            <button data-lang="en">EN</button>
            <button data-lang="ja">日本語</button>
          </div>
        </div>
        <div class="phead__inner">
          <span class="phead__cat">${flow.cat}</span>
          <h1>${flow.title[lang]}</h1>
          <p>${flow.tagline[lang]}</p>
          <div class="phead__stack">${flow.stack.map(s => `<span>${s}</span>`).join("")}</div>
        </div>
      </header>

      <main class="pmain">
        <div class="pmain__head">
          <h2>${t.how}</h2>
          <button class="replay" id="replay">${replayIcon()} ${t.replay}</button>
        </div>
        <ol class="flow ${flow.g}" id="flow">
          <span class="flow__track"></span>
          <span class="flow__fill"></span>
          <span class="flow__beam"><i></i></span>
          ${nodes}
        </ol>
      </main>

      <footer class="pfoot">
        <a class="back" href="index.html#projects">${arrowL()} <span>${t.back}</span></a>
        <span>© ${new Date().getFullYear()} Satyam Tiwari</span>
      </footer>`;

    bindLang();
    movePill();
    revealSequence();
    el("replay").addEventListener("click", revealSequence);
  }

  function arrowL() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>'; }
  function replayIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>'; }

  /* sequential reveal of nodes (the "animation") */
  function revealSequence() {
    const items = [...document.querySelectorAll(".fnode")];
    items.forEach(n => n.classList.remove("in"));
    const flowEl = el("flow");
    flowEl.classList.remove("running");
    void flowEl.offsetWidth;            // restart CSS animations
    flowEl.classList.add("running");
    items.forEach((node, i) => setTimeout(() => node.classList.add("in"), 180 + i * 320));
  }

  function bindLang() {
    el("lang-toggle").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b || b.dataset.lang === lang) return;
      lang = b.dataset.lang; localStorage.setItem("st_lang", lang); render();
    });
  }
  function movePill() {
    const wrap = el("lang-toggle"); if (!wrap) return;
    const pill = wrap.querySelector(".pill");
    const active = wrap.querySelector(`button[data-lang="${lang}"]`);
    wrap.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    pill.style.width = active.offsetWidth + "px";
    pill.style.transform = `translateX(${active.offsetLeft - 4}px)`;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
  addEventListener("resize", movePill);
})();
