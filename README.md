# WebAutomationTest（テスト自動化練習用サイト）

テスト自動化を練習するための静的サイトです。<br>
ビルド不要のため、GitHub Pages にそのまま配置して公開できます。

## フォルダ構成

| ファイル | 内容 |
|---|---|
| index.html | トップページ（各テストページへのカード一覧） |
| assets/common.css | 全ページ共通スタイル（ヘッダー・ボタン・入力欄など） |
| TableButtonSelect.html | 指示された条件に合う行の「選択」ボタンを押す |
| DownloadTest.html | 入力テキストを「名前を付けて保存」ダイアログで保存する |
| RegexTraining.html | 文章から受注番号を正規表現で抽出して判定する |
| PromptDialogTest.html | ブラウザの入力ダイアログ（prompt）を操作する |
| AutoUpdateTest.html | 開いて2秒後にトップページへ自動遷移する |
| ProgressTest.html | 5秒後にプログレス表示が削除され、完了表示に切り替わる |
| SuggestTest.html | サジェスト候補から値を選択して確定する |
| LayoutScreenshotTest.html | 4分割レイアウトのスクリーンショット確認 |
| DragDropTitleTest.html | タイトルのドラッグ＆ドロップでカードを並べ替える |
| DivScreenshotColorTest.html | DIVの色をRGBで変更してスクショ比較する |
| FlatDomTableTest.html | tr/td を使わないフラットDOMのテーブル |
| DeepTableTest.html | 多重ネストしたテーブルから、条件に合うボタン・値を特定する |
| .nojekyll | GitHub Pages で Jekyll 処理を無効にするための空ファイル |
