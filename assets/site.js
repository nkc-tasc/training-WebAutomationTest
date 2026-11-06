/* =========================================================
   site.js : ページ一覧データと共通ナビゲーションの描画
   ページを追加・変更する場合は SITE_CATEGORIES だけを編集してください。
   （トップページのカードとサイドバーの両方に反映されます）
   ========================================================= */
const SITE_CATEGORIES = [
  {
    name: "操作",
    color: "#3f6fd1",
    pages: [
      { file: "TableButtonSelect.html", name: "TableButtonSelect", desc: "条件に合う行のボタンを選択" },
      { file: "SuggestTest.html", name: "SuggestTest", desc: "サジェスト候補からの選択" },
      { file: "DragDropTitleTest.html", name: "DragDropTitleTest", desc: "ドラッグ＆ドロップで並べ替え" },
    ],
  },
  {
    name: "待機・遷移",
    color: "#e08a2e",
    pages: [
      { file: "AutoUpdateTest.html", name: "AutoUpdateTest", desc: "2秒後の自動画面遷移" },
      { file: "ProgressTest.html", name: "ProgressTest", desc: "読み込み完了までの待機" },
    ],
  },
  {
    name: "ダイアログ・ファイル",
    color: "#2fa37a",
    pages: [
      { file: "PromptDialogTest.html", name: "PromptDialogTest", desc: "入力ダイアログ（prompt）の操作" },
      { file: "DownloadTest.html", name: "DownloadTest", desc: "名前を付けてテキストを保存" },
    ],
  },
  {
    name: "要素の特定",
    color: "#8a5cd1",
    pages: [
      { file: "RegexTraining.html", name: "RegexTraining", desc: "正規表現で受注番号を抽出" },
      { file: "FlatDomTableTest.html", name: "FlatDomTableTest", desc: "フラットDOMのテーブル操作" },
      { file: "DeepTableTest.html", name: "DeepTableTest", desc: "深い階層のテーブルから要素を特定" },
    ],
  },
  {
    name: "スクリーンショット",
    color: "#d14f6e",
    pages: [
      { file: "LayoutScreenshotTest.html", name: "LayoutScreenshotTest", desc: "レイアウトのスクリーンショット確認" },
      { file: "DivScreenshotColorTest.html", name: "DivScreenshotColorTest", desc: "DIVのスクショ比較（色変更）" },
    ],
  },
];

(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const currentFile = decodeURIComponent(location.pathname.split("/").pop() || "index.html");

  // ---------- テストページ：左サイドバー ----------
  function renderSidebar(el) {
    const groups = SITE_CATEGORIES.map((cat) => `
      <div class="nav-cat">${esc(cat.name)}</div>
      ${cat.pages.map((p) => {
        const current = p.file === currentFile;
        return `<a href="${esc(p.file)}" class="nav-item${current ? " is-current" : ""}"${current ? ' aria-current="page"' : ""}>${esc(p.name)}</a>`;
      }).join("")}`).join("");

    el.innerHTML = `
      <div class="sidebar-logo">WebAutomationTest</div>
      <nav class="sidebar-nav" aria-label="ページ一覧">
        <div class="link_container"><a href="index.html" class="nav-home">ホームページへ戻る</a></div>
        ${groups}
      </nav>`;
  }

  // ---------- トップページ：カテゴリ別カード ----------
  function renderIndex(el) {
    el.innerHTML = SITE_CATEGORIES.map((cat) => `
      <section class="category" style="--cat-color:${cat.color}">
        <h2 class="category-title">${esc(cat.name)}</h2>
        <div class="card-container">
          ${cat.pages.map((p) => `
          <div class="card">
            <a href="${esc(p.file)}">${esc(p.name)}</a>
            <p class="card-desc">${esc(p.desc)}</p>
          </div>`).join("")}
        </div>
      </section>`).join("");
  }

  // スクリプト読み込み時点で存在する要素に描画（ページ側のスクリプトより先に完了します）
  const sidebar = document.getElementById("sidebar");
  if (sidebar) renderSidebar(sidebar);
  const index = document.getElementById("indexCards");
  if (index) renderIndex(index);
})();
