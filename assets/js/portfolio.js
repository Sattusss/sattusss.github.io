/* =========================================================
   Portfolio interactions + EN/JA bilingual engine
   ========================================================= */
(() => {
  "use strict";

  /* ---------------- ICONS (inline SVG) ---------------- */
  const I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.4 18 4.7 18 4.7c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.6 7.5L22 22h-6.2l-4.8-6.3L5.5 22H2.7l7-8L2 2h6.3l4.3 5.7L18.2 2Zm-1 18h1.6L7 3.7H5.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 6-6 6 6"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9 12 5 2 9l10 4 10-4Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="m8.2 13.4-1.4 7.6L12 18l5.2 3-1.4-7.6"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>',
    nlp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 0 6 4 4 0 0 1-8 0 3 3 0 0 1 0-6V6a4 4 0 0 1 4-4Z"/><path d="M12 13v8M9 21h6"/></svg>',
    llm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6M9 13h4"/><circle cx="17" cy="13" r="0.6" fill="currentColor"/></svg>',
    ml: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7 8l4 8m6-8-4 8"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.5A4 4 0 0 0 6 19Z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
  };

  /* ---------------- STATIC STRINGS (i18n) ---------------- */
  const T = {
    en: {
      "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
      "nav.projects": "Projects", "nav.education": "Education", "nav.contact": "Contact",
      "brand.sub": "AI · LLM · ML Engineer",
      "hero.status": "Open to AI / LLM / ML Engineer roles",
      "hero.boot": "System Online · AI Engineer",
      "hero.role1": "AI · Machine Learning Engineer",
      "resume.en": "English",
      "resume.jp": "Japanese · 日本語",
      "hero.hi": "Hi, I'm",
      "hero.lead": "I build production <strong>NLP, speech &amp; multilingual LLM</strong> systems - from research PoC to deployed, low-latency services. Based in Tokyo 🇯🇵, working across bilingual JP/EN teams.",
      "hero.cta1": "View My Work", "hero.cta2": "Download Résumé",
      "chip.rag": "RAG", "chip.asr": "ASR / TTS", "chip.llm": "LLM Ops", "chip.py": "PyTorch",
      "about.eyebrow": "About Me", "about.title": "Turning AI research into shipped products",
      "about.p1": "Machine Learning / AI Engineer with <strong>2+ years</strong> building production NLP, speech, and multilingual language systems in Python - across the full cycle from research PoC through design, development, and deployment.",
      "about.p2": "Hands-on with <strong>ASR &amp; TTS</strong>, Transformer-based multilingual embeddings, <strong>RAG pipelines</strong>, model evaluation &amp; benchmarking, and inference optimization for real-time, low-latency processing. I read English technical papers, build internal evaluation tooling, and turn prototypes into customer-facing services on Linux with Docker.",
      "about.p3": "<strong>Business-level Japanese</strong> - effective across bilingual (JP/EN) teams, and comfortable presenting AI systems to management in Japanese.",
      "about.l1t": "Based in", "about.l1d": "Tokyo, Japan",
      "about.l2t": "Currently", "about.l2d": "Data Scientist @ Human Resocia",
      "about.l3t": "Focus", "about.l3d": "NLP · Speech · LLM · RAG · Embeddings",
      "about.l4t": "Education", "about.l4d": "M.C.A (IT) · Amity University",
      "about.langtitle": "Languages",
      "skills.eyebrow": "Tech Stack", "skills.title": "Skills &amp; Tools",
      "skills.sub": "The toolkit I use to take AI systems from notebook to production.",
      "exp.eyebrow": "Career", "exp.title": "Work Experience",
      "exp.sub": "2+ years delivering AI systems inside Japanese R&amp;D labs and system integrators.",
      "proj.eyebrow": "Portfolio", "proj.title": "Featured Projects",
      "proj.sub": "Selected AI, LLM, NLP, speech, and data projects - from production systems to research builds.",
      "proj.view": "See how it works",
      "f.all": "All", "f.llm": "LLM &amp; RAG", "f.nlp": "NLP &amp; Speech", "f.ml": "ML &amp; CV", "f.data": "Data &amp; BI",
      "edu.eyebrow": "Background", "edu.title": "Education &amp; Certifications",
      "edu.degrees": "Education", "edu.certs": "Certifications",
      "contact.eyebrow": "Get in touch", "contact.title": "Let's build something intelligent",
      "contact.sub": "I'm open to AI / LLM / ML Engineer and Data Scientist roles. Whether it's an opportunity, a collaboration, or just to talk shop about NLP and LLMs - my inbox is open.",
      "contact.cta1": "Email Me", "contact.cta2": "LinkedIn",
      "footer.rights": "Built with curiosity in Tokyo.",
    },
    ja: {
      "nav.about": "概要", "nav.skills": "スキル", "nav.experience": "職務経歴",
      "nav.projects": "プロジェクト", "nav.education": "学歴・資格", "nav.contact": "連絡先",
      "brand.sub": "AI・LLM・MLエンジニア",
      "hero.status": "AI / LLM / ML エンジニアのポジションを募集中",
      "hero.boot": "システム起動 · AIエンジニア",
      "hero.role1": "AI・機械学習エンジニア",
      "resume.en": "英語 · English",
      "resume.jp": "日本語",
      "hero.hi": "こんにちは、",
      "hero.lead": "<strong>音声・多言語NLP・LLM</strong> を軸に、研究PoCから低レイテンシな実運用サービスまでを一気通貫で開発しています。東京 🇯🇵 を拠点に、日英バイリンガルのチームで活動中。",
      "hero.cta1": "実績を見る", "hero.cta2": "履歴書をダウンロード",
      "chip.rag": "RAG", "chip.asr": "音声認識/合成", "chip.llm": "LLM運用", "chip.py": "PyTorch",
      "about.eyebrow": "自己紹介", "about.title": "AIの研究を、実用プロダクトへ",
      "about.p1": "Pythonで本番運用のNLP・音声・多言語システムを開発する機械学習／AIエンジニア。<strong>実務経験2年以上</strong>、研究PoCから設計・開発・運用までの一連の工程を担当しています。",
      "about.p2": "<strong>音声認識（ASR）・音声合成（TTS）</strong>、Transformerベースの多言語埋め込み、<strong>RAGパイプライン</strong>、モデル評価・ベンチマーク、リアルタイム・低レイテンシ処理に向けた推論最適化まで実装。英語の技術論文を参照し、内製の評価ツールを構築しながら、PoCをLinux・Docker環境で顧客向けサービスへ落とし込みます。",
      "about.p3": "<strong>ビジネスレベルの日本語</strong>。日英バイリンガルのチーム開発に対応し、AIシステムを日本語で経営層へ説明した経験があります。",
      "about.l1t": "拠点", "about.l1d": "東京、日本",
      "about.l2t": "現職", "about.l2d": "データサイエンティスト（ヒューマンリソシア）",
      "about.l3t": "専門領域", "about.l3d": "NLP・音声・LLM・RAG・Embedding",
      "about.l4t": "学歴", "about.l4d": "情報技術 修士（アミティ大学）",
      "about.langtitle": "語学",
      "skills.eyebrow": "技術スタック", "skills.title": "スキル＆ツール",
      "skills.sub": "AIシステムをノートブックから本番環境へ届けるための技術スタック。",
      "exp.eyebrow": "キャリア", "exp.title": "職務経歴",
      "exp.sub": "日本の研究所・システムインテグレーターでAIシステムを開発、実務2年以上。",
      "proj.eyebrow": "ポートフォリオ", "proj.title": "主なプロジェクト",
      "proj.sub": "AI・LLM・NLP・音声・データ分析の代表的なプロジェクト。本番システムから研究開発まで。",
      "proj.view": "仕組みを見る",
      "f.all": "すべて", "f.llm": "LLM・RAG", "f.nlp": "NLP・音声", "f.ml": "ML・CV", "f.data": "データ・BI",
      "edu.eyebrow": "バックグラウンド", "edu.title": "学歴・資格",
      "edu.degrees": "学歴", "edu.certs": "資格",
      "contact.eyebrow": "お問い合わせ", "contact.title": "知性あるプロダクトを一緒に",
      "contact.sub": "AI / LLM / ML エンジニア、データサイエンティストのポジションを募集中です。採用のご相談、協業、NLPやLLMの技術談義など、お気軽にご連絡ください。",
      "contact.cta1": "メールする", "contact.cta2": "LinkedIn",
      "footer.rights": "東京にて、好奇心とともに制作。",
    }
  };

  const ROLES = {
    en: ["AI Engineer", "LLM Engineer", "ML Engineer", "Data Scientist", "NLP & Speech Engineer"],
    ja: ["AIエンジニア", "LLMエンジニア", "MLエンジニア", "データサイエンティスト", "NLP・音声エンジニア"]
  };

  const STATS = [
    { n: 2, suf: "+", en: "Years in AI / ML", ja: "AI/ML 実務経験（年）" },
    { n: 3, suf: "", en: "Production AI systems in Japan", ja: "日本での本番AIシステム" },
    { n: 9, suf: "+", en: "Projects shipped", ja: "プロジェクト実績" },
    { n: 3, suf: "", en: "Languages · JP / EN / HI", ja: "言語 · 日 / 英 / ヒンディー" },
  ];

  const MARQUEE = ["PyTorch","Transformers","RAG","LLM Orchestration","Whisper · ASR","VITS · TTS","LangChain","ChromaDB","Multilingual NLP","sentence-transformers","Gemini","Claude","Django","FastAPI","Docker","Inference Optimization","Prompt Engineering","Vector Search"];

  const SKILLS = [
    { icon: I.nlp, en: "NLP & Speech", ja: "NLP・音声処理", items: ["Multilingual NLP","ASR · Whisper","Faster-Whisper","CTranslate2","TTS · VITS","FastSpeech2","HiFi-GAN","Conformer","ESPnet","Transformer Embeddings","Seq2Seq","Text Normalization"] },
    { icon: I.llm, en: "Generative AI & LLM", ja: "生成AI・LLM", items: ["LLM Orchestration","Gemini","Claude (Anthropic)","OpenAI","RAG Pipelines","LangChain","Prompt Engineering","ChromaDB","sentence-transformers","Vector Search"] },
    { icon: I.ml, en: "ML & Deep Learning", ja: "機械学習・深層学習", items: ["PyTorch","Transformers","scikit-learn","KNN","Random Forest","LSTM / RNN","FNN","Model Eval · AUROC/F1","Inference Optimization"] },
    { icon: I.server, en: "Backend & Data", ja: "バックエンド・データ", items: ["Python","Django","FastAPI","REST APIs","PostgreSQL","SQLite","Pandas","NumPy","Streamlit","Power BI"] },
    { icon: I.cloud, en: "Cloud & MLOps", ja: "クラウド・MLOps", items: ["Docker","Linux · Ubuntu/WSL","Git / GitHub / GitLab","Amazon Bedrock","Azure OpenAI","OpenAI API","Cohere API"] },
    { icon: I.doc, en: "Document AI & CV", ja: "ドキュメントAI・CV", items: ["PyMuPDF (fitz)","python-pptx","Tesseract OCR","OpenCV","PDF / PPTX / DOCX / XLSX","Pyvis"] },
  ];

  const EXP = [
    {
      date: "Mar 2024 – Present", dateJa: "2024年3月 – 現在",
      role: { en: "Data Scientist / AI Engineer", ja: "データサイエンティスト / AIエンジニア" },
      org: { en: "Human Resocia Co., Ltd · Tokyo, Japan", ja: "ヒューマンリソシア株式会社 · 東京" },
      subs: [
        {
          title: { en: "GenAI Network Design Review System (RAG)", ja: "生成AI ネットワーク設計レビューシステム（RAG）" },
          tag: { en: "ICT & Social-Infra SI · Apr 2026–Present", ja: "ICT・社会インフラ系SI · 2026年4月–現在" },
          points: {
            en: ["Owned end-to-end delivery (requirements → deployment) of a GenAI service that reviews technical design documents against device configurations.","Built a RAG pipeline (chunking, indexing, hybrid retrieval) over multi-format docs (PDF/PPTX/DOCX/XLSX) with selective Tesseract OCR.","Orchestrated LLM review across Gemini & Claude on a Django web app; presented the system to management in Japanese.","Diagnosed a ~20-min processing bottleneck and designed a content-hash caching layer, cutting repeat processing from minutes to seconds."],
            ja: ["要件定義から運用まで一気通貫で担当。設計書と実機コンフィグを照合・レビューする生成AIサービスを構築。","複数形式（PDF/PPTX/DOCX/XLSX）の設計文書に対するRAGパイプライン（チャンキング・インデックス・ハイブリッド検索）と選択的OCRを実装。","Gemini・ClaudeによるLLMレビューをDjango Webアプリ上でオーケストレーション。経営層へ日本語でデモ・説明。","約20分の処理ボトルネックを特定し、コンテンツハッシュによるキャッシュ層を設計。再処理を分単位から秒単位へ短縮。"]
          },
          stack: ["Python","Django","LangChain","ChromaDB","sentence-transformers","PyMuPDF","python-pptx","Gemini","Claude","PostgreSQL"]
        },
        {
          title: { en: "Medical Document Similarity & EMR System", ja: "医療文書 類似度分析・電子カルテ（EMR）システム" },
          tag: { en: "Integrated Electronics Mfr · R&D Lab · Apr 2025–Mar 2026", ja: "総合電機メーカー研究所 · 2025年4月–2026年3月" },
          points: {
            en: ["Built a similarity-search system over clinical records using TF-IDF, cosine similarity & KNN on Transformer embeddings.","Benchmarked & optimized embedding models (OpenAI, Cohere, Amazon Titan) via offline evaluation (AUROC/F1) and error analysis.","Shipped preprocessing/evaluation pipelines and a Streamlit EMR (JSON) UI with similarity-graph visualization (Pyvis)."],
            ja: ["TF-IDF・コサイン類似度・KNNをTransformer埋め込みに適用し、臨床記録の類似文書検索システムを構築。","複数の埋め込みモデル（OpenAI・Cohere・Amazon Titan）をオフライン評価（AUROC/F1）と誤り分析で比較・最適化。","前処理・評価パイプラインと、類似度グラフ可視化（Pyvis）付きのStreamlit製EMR（JSON）管理UIを開発。"]
          },
          stack: ["Python","scikit-learn","Transformers","Pandas","NumPy","Amazon Bedrock","OpenAI API","Cohere API","Streamlit","Pyvis"]
        },
        {
          title: { en: "Real-Time Speech AI (ASR / TTS)", ja: "リアルタイム音声AI（ASR / TTS）" },
          tag: { en: "Integrated Electronics Mfr · R&D Lab · Mar 2024–Mar 2025", ja: "総合電機メーカー研究所 · 2024年3月–2025年3月" },
          points: {
            en: ["Built a real-time, voice-operable system for hands-free data entry/edit/delete using Faster-Whisper (ASR) and VITS (TTS) with a live-recording Streamlit UI.","Reduced latency and improved transcription accuracy via CTranslate2 inference optimization and string-matching post-processing."],
            ja: ["Faster-Whisper（ASR）とVITS（TTS）を用い、ハンズフリーでデータの入力・修正・削除を行えるリアルタイム音声操作システムを構築。ライブ録音対応のStreamlit UIを実装。","CTranslate2による推論最適化と文字列マッチング後処理で、低レイテンシ化と認識精度の向上を実現。"]
          },
          stack: ["Python","PyTorch","Faster-Whisper","VITS","ESPnet","Conformer","FastSpeech2","HiFi-GAN","Streamlit"]
        }
      ]
    },
    {
      date: "Jan 2023 – Jun 2023", dateJa: "2023年1月 – 2023年6月",
      role: { en: "AI Developer Intern", ja: "AI開発インターン" },
      org: { en: "Digipodium · Lucknow, India", ja: "Digipodium · インド・ラクナウ" },
      points: {
        en: ["Built a voice-based email system for visually impaired users (Google Speech & Gmail APIs, Django, JavaScript); achieved ~90% ASR accuracy and ~50% task-time reduction."],
        ja: ["視覚障がい者向けの音声メールシステムを開発（Google Speech・Gmail API、Django、JavaScript）。ASR精度約90%、操作時間を約50%削減。"]
      },
      stack: ["Python","Django","SpeechRecognition","Gmail API","JavaScript","SQLite"]
    },
    {
      date: "Jun 2022 – Sep 2022", dateJa: "2022年6月 – 2022年9月",
      role: { en: "AI Developer Intern", ja: "AI開発インターン" },
      org: { en: "Digipodium · Lucknow, India", ja: "Digipodium · インド・ラクナウ" },
      points: {
        en: ["Built a real-time object recognition system using TensorFlow and OpenCV with audio feedback; collected and labeled 1,000+ training images."],
        ja: ["TensorFlowとOpenCVを用いたリアルタイム物体認識システムを開発し、音声フィードバックを実装。1,000枚以上の学習画像を収集・ラベリング。"]
      },
      stack: ["Python","TensorFlow","OpenCV","Pandas","Streamlit"]
    }
  ];

  const PROJECTS = [
    { slug: "ai-design-review", cover: "g1", icon: I.llm, badge: "RAG", filter: "llm", cat: "LLM · RAG",
      title: { en: "AI Network Design Review System", ja: "AIネットワーク設計レビュー" },
      desc: { en: "Enterprise GenAI service that reviews technical design docs against device configs across PDF/PPTX/DOCX/XLSX using a full RAG pipeline.", ja: "PDF/PPTX/DOCX/XLSXの設計書と実機コンフィグをRAGで照合・レビューする企業向け生成AIサービス。" },
      stack: ["RAG","LangChain","ChromaDB","Gemini","Claude","Django"] },
    { slug: "medical-similarity", cover: "g2", icon: I.doc, badge: "Embeddings", filter: "llm", cat: "LLM · Embeddings",
      title: { en: "Medical Document Similarity & EMR", ja: "医療文書 類似度・EMR" },
      desc: { en: "Similarity search over clinical records with Transformer embeddings; benchmarked OpenAI/Cohere/Titan via AUROC/F1 with a Streamlit EMR UI.", ja: "Transformer埋め込みによる臨床記録の類似検索。OpenAI/Cohere/TitanをAUROC/F1で比較し、Streamlit製EMR UIを構築。" },
      stack: ["Transformers","Bedrock","scikit-learn","Streamlit","Pyvis"] },
    { slug: "speech-ai", cover: "g3", icon: I.nlp, badge: "ASR · TTS", filter: "nlp", cat: "NLP · Speech",
      title: { en: "Real-Time Speech AI (ASR / TTS)", ja: "リアルタイム音声AI（ASR/TTS）" },
      desc: { en: "Hands-free, voice-operable data entry using Faster-Whisper and VITS, optimized with CTranslate2 for low-latency real-time inference.", ja: "Faster-WhisperとVITSによるハンズフリー音声操作。CTranslate2で低レイテンシなリアルタイム推論を実現。" },
      stack: ["Faster-Whisper","VITS","CTranslate2","PyTorch","ESPnet"] },
    { slug: "blog-generator", img: "assets/img/Blog.png", filter: "llm", cat: "LLM · GenAI",
      title: { en: "AI Blog Generator (LLaMA 2)", ja: "AIブログ生成（LLaMA 2）" },
      desc: { en: "Local LLM app that generates blog posts from a prompt, with topic, tone and length controls using LLaMA 2 + LangChain.", ja: "ローカルLLMでプロンプトからブログ記事を自動生成。トピック・文体・語数を指定可能（LLaMA 2 + LangChain）。" },
      stack: ["LLaMA 2","LangChain","CTransformers","Streamlit"] },
    { slug: "multi-disease", img: "assets/img/multi_disease.png", filter: "ml", cat: "ML · Healthcare",
      title: { en: "Multi-Disease Prediction System", ja: "複数疾患予測システム" },
      desc: { en: "Predicts risk for heart disease, diabetes and Parkinson's from clinical inputs; compares ML and deep-learning (LSTM/FNN) models.", ja: "臨床データから心臓病・糖尿病・パーキンソン病のリスクを予測。機械学習と深層学習（LSTM/FNN）を比較。" },
      stack: ["scikit-learn","LSTM","FNN","Streamlit"] },
    { slug: "sales-dashboard", img: "assets/img/powerbi.png", filter: "data", cat: "Data · BI",
      title: { en: "Sales Performance Dashboard", ja: "売上分析ダッシュボード" },
      desc: { en: "Interactive Power BI dashboard integrating sales data with DAX KPIs (revenue, repeat rate) and category/region trend analysis.", ja: "売上データを統合したインタラクティブなPower BIダッシュボード。DAXでKPI（売上・リピート率）やカテゴリ別・地域別トレンドを分析。" },
      stack: ["Power BI","DAX","Power Query","SQL"] },
    { slug: "emotion-detection", img: "assets/img/emotion.jpeg", filter: "ml", cat: "ML · Computer Vision",
      title: { en: "Facial Emotion Detection", ja: "表情感情検出" },
      desc: { en: "Classifies emotions from facial images over a 16k-image dataset; compares KNN, Logistic Regression, Naïve Bayes and Random Forest.", ja: "約1.6万枚の顔画像データセットから感情を分類。KNN・ロジスティック回帰・ナイーブベイズ・ランダムフォレストを比較。" },
      stack: ["OpenCV","scikit-learn","NumPy","Seaborn"] },
    { slug: "voice-email", img: "assets/img/work4.png", filter: "nlp", cat: "NLP · Accessibility",
      title: { en: "Voice-Based Email (Accessibility)", ja: "音声メールシステム（アクセシビリティ）" },
      desc: { en: "Lets visually impaired users compose, send and read email entirely by voice via Gmail API and speech recognition.", ja: "視覚障がい者がGmail APIと音声認識で、メールの作成・送信・読み上げを音声のみで操作できるシステム。" },
      stack: ["Django","SpeechRecognition","Gmail API","Bootstrap"] },
    { slug: "object-recognition", img: "assets/img/work1.png", filter: "ml", cat: "ML · Computer Vision",
      title: { en: "Real-Time Object Recognition", ja: "リアルタイム物体認識" },
      desc: { en: "Detects everyday objects from a live camera feed and announces results by audio to assist visually impaired users.", ja: "ライブカメラ映像から日常の物体を検出し、結果を音声で通知。視覚障がい者の生活を支援。" },
      stack: ["TensorFlow","OpenCV","Streamlit","Python"] },
  ];

  const EDU = [
    { degree: { en: "Master of Computer Applications (IT)", ja: "コンピュータアプリケーション修士（情報技術）" },
      school: { en: "Amity University, Lucknow · India", ja: "アミティ大学 ラクナウ校 · インド" },
      when: "2021 – 2023", extra: { en: "GPA 8.45", ja: "GPA 8.45" } },
    { degree: { en: "Bachelor of Science", ja: "理学士（B.Sc）" },
      school: { en: "RMLAU University · India", ja: "RMLAU大学 · インド" },
      when: "2018 – 2021", extra: { en: "", ja: "" } },
  ];

  const CERTS = [
    { en: "CCNA v7 - Switching, Routing & Wireless Essentials", ja: "CCNA v7 - Switching, Routing & Wireless Essentials", when: "2022" },
    { en: "IBM - Python for Data Science, AI & Development (Coursera)", ja: "IBM - Python for Data Science, AI & Development（Coursera）", when: "2023" },
    { en: "IBM - Data Analysis Using Python", ja: "IBM - Data Analysis Using Python", when: "2023" },
    { en: "Oracle Academy - Database Foundations", ja: "Oracle Academy - Database Foundations", when: "2022" },
    { en: "NAT 2Q - Japanese Language Proficiency", ja: "日本語能力試験 NAT 2級", when: "2024" },
  ];

  const LANGS = [
    { en: "Japanese", ja: "日本語", level: { en: "Business · NAT 2Q", ja: "ビジネス · NAT 2級" }, pct: 75 },
    { en: "English", ja: "英語", level: { en: "Fluent", ja: "流暢" }, pct: 90 },
    { en: "Hindi", ja: "ヒンディー語", level: { en: "Native", ja: "母語" }, pct: 100 },
  ];

  /* ---------------- STATE ---------------- */
  let lang = localStorage.getItem("st_lang") || "en";

  /* ---------------- RENDER (dynamic lists) ---------------- */
  const el = (id) => document.getElementById(id);

  function renderStats() {
    el("stats").innerHTML = STATS.map(s => `
      <div class="stat" data-reveal>
        <b><span class="num text-grad" data-target="${s.n}">0</span><span class="text-grad">${s.suf}</span></b>
        <span data-stat>${s[lang]}</span>
      </div>`).join("");
  }

  function renderMarquee() {
    const row = MARQUEE.map(m => `<span>${m}</span>`).join("");
    el("marquee").innerHTML = `<div class="marquee__track">${row}${row}</div>`;
  }

  function renderSkills() {
    el("skills-grid").innerHTML = SKILLS.map((s, i) => `
      <div class="skill-card" data-reveal data-delay="${(i % 2) + 1}">
        <div class="skill-card__head">
          <div class="skill-card__ic">${s.icon}</div>
          <h3>${s[lang]}</h3>
        </div>
        <div class="chips">${s.items.map(x => `<span>${x}</span>`).join("")}</div>
      </div>`).join("");
  }

  function renderExp() {
    el("timeline").innerHTML = EXP.map(e => {
      const top = `
        <div class="tl-meta">
          <span class="tl-date">${lang === "ja" ? e.dateJa : e.date}</span>
          <span class="tl-place">${e.org[lang]}</span>
        </div>
        <h3>${e.role[lang]}</h3>`;
      let body = "";
      if (e.subs) {
        body = e.subs.map(s => `
          <div class="tl-sub">
            <h4>${s.title[lang]} <small>${s.tag[lang]}</small></h4>
            <ul>${s.points[lang].map(p => `<li>${p}</li>`).join("")}</ul>
            <div class="tl-stack">${s.stack.map(t => `<span>${t}</span>`).join("")}</div>
          </div>`).join("");
      } else {
        body = `
          <ul style="margin-top:6px;display:grid;gap:7px">${e.points[lang].map(p => `<li style="position:relative;padding-left:18px;color:var(--muted);font-size:.92rem"><span style="position:absolute;left:0;color:var(--primary)">▸</span>${p}</li>`).join("")}</ul>
          <div class="tl-stack">${e.stack.map(t => `<span>${t}</span>`).join("")}</div>`;
      }
      return `<div class="tl-item" data-reveal><span class="tl-dot"></span><div class="tl-card">${top}${body}</div></div>`;
    }).join("");
  }

  function renderProjects() {
    el("projects-grid").innerHTML = PROJECTS.map((p, i) => {
      const media = p.cover
        ? `<div class="proj__media proj__media--cover ${p.cover}">
             <span class="proj__cat">${p.cat}</span>
             <span class="proj__icon">${p.icon}</span>
             <span class="proj__badge">${p.badge}</span>
           </div>`
        : `<div class="proj__media">
             <span class="proj__cat">${p.cat}</span>
             <img src="${p.img}" alt="${p.title[lang]}" loading="lazy">
           </div>`;
      return `
      <article class="proj" data-filter="${p.filter}" data-reveal data-delay="${(i % 3) + 1}">
        ${media}
        <div class="proj__body">
          <h3>${p.title[lang]}</h3>
          <p>${p.desc[lang]}</p>
          <div class="proj__stack">${p.stack.map(t => `<span>${t}</span>`).join("")}</div>
          <span class="proj__link">${T[lang]["proj.view"]} ${I.arrow}</span>
        </div>
        <a class="proj__stretch" href="project.html?p=${p.slug}" target="_blank" rel="noopener" aria-label="${p.title[lang]} - ${T[lang]["proj.view"]}"></a>
      </article>`;
    }).join("");
  }

  function renderEdu() {
    el("edu-degrees").innerHTML = EDU.map(d => `
      <div class="edu-item">
        <span class="when">${d.when}</span>
        <b>${d.degree[lang]}</b>
        <span>${d.school[lang]}${d.extra[lang] ? " · " + d.extra[lang] : ""}</span>
      </div>`).join("");
    el("edu-certs").innerHTML = CERTS.map(c => `
      <li><span class="badge">${I.award}</span><span><b>${c[lang]}</b> · ${c.when}</span></li>`).join("");
  }

  function renderLangs() {
    el("lang-bars").innerHTML = LANGS.map(l => `
      <div class="row">
        <div class="top"><b>${l[lang]}</b><span>${l.level[lang]}</span></div>
        <div class="bar"><i data-bar="${l.pct}"></i></div>
      </div>`).join("");
  }

  /* ---------------- i18n static ---------------- */
  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const k = node.getAttribute("data-i18n");
      if (T[lang][k] !== undefined) node.innerHTML = T[lang][k];
    });
    document.documentElement.lang = lang === "ja" ? "ja" : "en";
    document.title = lang === "ja"
      ? "ティワリ・サティヤム - AI・LLM・MLエンジニア"
      : "Satyam Tiwari - AI · LLM · ML Engineer";
  }

  /* ---------------- language toggle ---------------- */
  function setLang(next) {
    lang = next;
    localStorage.setItem("st_lang", lang);
    applyStatic();
    renderStats(); renderSkills(); renderExp(); renderProjects(); renderEdu(); renderLangs();
    movePill();
    initReveal();      // re-bind newly rendered nodes
    runCounters();
    animateBars();
    applyActiveFilter();
  }

  function movePill() {
    const wrap = el("lang-toggle");
    const pill = wrap.querySelector(".pill");
    const active = wrap.querySelector(`button[data-lang="${lang}"]`);
    wrap.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    pill.style.width = active.offsetWidth + "px";
    pill.style.transform = `translateX(${active.offsetLeft - 4}px)`;
  }

  /* ---------------- typewriter ---------------- */
  let typeTimer;
  function typewriter() {
    clearTimeout(typeTimer);
    const target = el("typed");
    let words = ROLES[lang], wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = words[wi];
      target.textContent = word.substring(0, ci);
      if (!deleting && ci < word.length) { ci++; typeTimer = setTimeout(tick, 70); }
      else if (!deleting && ci === word.length) { deleting = true; typeTimer = setTimeout(tick, 1500); }
      else if (deleting && ci > 0) { ci--; typeTimer = setTimeout(tick, 35); }
      else { deleting = false; wi = (wi + 1) % words.length; words = ROLES[lang]; typeTimer = setTimeout(tick, 250); }
    };
    tick();
  }

  /* ---------------- reveal on scroll ---------------- */
  let revealObs;
  function initReveal() {
    if (revealObs) revealObs.disconnect();
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("[data-reveal]:not(.in)").forEach(n => revealObs.observe(n));
  }

  /* ---------------- counters ---------------- */
  function runCounters() {
    document.querySelectorAll(".num").forEach(node => {
      const target = +node.dataset.target;
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          let cur = 0; const step = Math.max(1, Math.ceil(target / 28));
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(t); }
            node.textContent = cur;
          }, 38);
          o.unobserve(e.target);
        });
      }, { threshold: 0.6 });
      obs.observe(node);
    });
  }

  /* ---------------- language bars ---------------- */
  function animateBars() {
    document.querySelectorAll("[data-bar]").forEach(bar => {
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(e => { if (e.isIntersecting) { bar.style.width = bar.dataset.bar + "%"; o.unobserve(e.target); } });
      }, { threshold: 0.5 });
      obs.observe(bar);
    });
  }

  /* ---------------- project filters ---------------- */
  let activeFilter = "all";
  function applyActiveFilter() {
    document.querySelectorAll(".proj").forEach(card => {
      const show = activeFilter === "all" || card.dataset.filter === activeFilter;
      card.style.display = show ? "" : "none";
    });
  }
  function bindFilters() {
    el("filters").addEventListener("click", (e) => {
      const btn = e.target.closest("button"); if (!btn) return;
      activeFilter = btn.dataset.f;
      el("filters").querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
      applyActiveFilter();
      initReveal();
    });
  }

  /* ---------------- nav / scroll / misc ---------------- */
  function bindNav() {
    const nav = el("nav"), bar = el("scrollbar"), totop = el("totop");
    const links = [...document.querySelectorAll(".nav__links a")];
    const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 30);
      totop.classList.toggle("show", y > 600);
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      let cur = sections[0]?.id;
      sections.forEach(s => { if (y >= s.offsetTop - 130) cur = s.id; });
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // mobile menu
    const menu = el("nav-links"), burger = el("burger");
    burger.addEventListener("click", () => menu.classList.toggle("open"));
    menu.addEventListener("click", (e) => { if (e.target.tagName === "A") menu.classList.remove("open"); });

    totop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function bindSpotlight() {
    const sp = el("spotlight");
    if (matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", (e) => {
        sp.style.opacity = "1"; sp.style.left = e.clientX + "px"; sp.style.top = e.clientY + "px";
      });
    }
  }

  function bindLangToggle() {
    el("lang-toggle").addEventListener("click", (e) => {
      const btn = e.target.closest("button"); if (!btn) return;
      if (btn.dataset.lang !== lang) setLang(btn.dataset.lang);
    });
  }

  function injectIcons() {
    document.querySelectorAll("[data-icon]").forEach(n => { n.innerHTML = I[n.dataset.icon] || ""; });
  }

  /* résumé download dropdown */
  function bindResumeDropdown() {
    const dd = el("resume-dd"); if (!dd) return;
    const btn = el("resume-btn");
    const close = () => { dd.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (e) => { if (!dd.contains(e.target)) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    dd.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  }

  /* ambient AI neural-network canvas (hero) */
  function aiNet() {
    const canvas = el("ai-net"); if (!canvas) return;
    if (getComputedStyle(canvas).display === "none") return; // WebGL 3D hero took over
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, dpr, nodes = [], raf;
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = host.clientWidth; h = host.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(54, Math.round((w * h) / 24000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .24, vy: (Math.random() - .5) * .24,
        r: Math.random() * 1.6 + .7
      }));
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 124) { ctx.strokeStyle = `rgba(229,70,80,${(1 - d / 124) * .3})`; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.3);
        ctx.fillStyle = "rgba(255,95,105,.7)"; ctx.fill(); }
      raf = requestAnimationFrame(frame);
    }
    size(); frame();
    if (reduce) cancelAnimationFrame(raf);
    addEventListener("resize", size);
  }

  /* ---------------- init ---------------- */
  function init() {
    injectIcons();
    applyStatic();
    renderStats(); renderMarquee(); renderSkills(); renderExp(); renderProjects(); renderEdu(); renderLangs();
    bindNav(); bindFilters(); bindLangToggle(); bindSpotlight(); bindResumeDropdown(); aiNet();
    movePill(); typewriter(); initReveal(); runCounters(); animateBars();
    // restart typewriter when language changes - handled in setLang via re-render of roles
  }

  // re-run typewriter on language switch
  const _setLang = setLang;
  setLang = function (n) { _setLang(n); typewriter(); };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.addEventListener("resize", () => movePill());
})();
