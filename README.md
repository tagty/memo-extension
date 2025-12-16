# Mini Memo

シンプルなポップアップ型メモ Chrome拡張機能

## 概要

Mini Memoは、Chromeツールバーから素早くアクセスできるモダンでシンプルなメモアプリです。テキストは自動保存され、いつでも簡単にメモを取ることができます。

## 機能

- ポップアップ形式のシンプルなメモ入力
- 自動保存（入力と同時に保存）
- Chrome Storage API によるクラウド同期（Chromeアカウント間でメモを同期）
- キーボードショートカット（`Alt+Shift+M` でポップアップを開く）
- ポップアップ開始時に自動的にテキストエリアにフォーカス
- モダン・ミニマルなUI
  - グラデーション背景
  - 美しいシャドウとスムーズなアニメーション
  - インディゴ-パープルのアクセントカラー
- 文字数カウンター
- リサイズ可能なテキストエリア

## インストール

### 前提条件

- Node.js 18以上
- npm

### 開発版として読み込む

1. 依存関係をインストール
   ```bash
   npm install
   ```

2. ビルドを実行
   ```bash
   npm run build
   ```

3. Chromeで `chrome://extensions/` を開く
4. 右上の「デベロッパーモード」を有効にする
5. 「パッケージ化されていない拡張機能を読み込む」をクリック
6. `dist/` ディレクトリを選択
7. ツールバーに拡張機能アイコンが表示されます

### 変更を反映する

コードを変更した後は、`npm run build` で再ビルドし、`chrome://extensions/` で拡張機能カードの更新アイコンをクリックしてください。

## 使い方

1. ツールバーの Mini Memo アイコンをクリック（または `Alt+Shift+M` を押す）
2. ポップアップが開くと、自動的にテキストエリアにフォーカスされるので、すぐにメモを入力できます
3. 入力内容は自動的に保存されます
4. 次回アイコンをクリックすると、前回のメモが表示されます

### キーボードショートカット

- デフォルト: `Alt+Shift+M` でポップアップを開く
- カスタマイズ: `chrome://extensions/shortcuts` から好みのキーに変更可能

## 技術スタック

- **Manifest V3**: Chrome Extension Manifest V3形式
- **フロントエンド**: React 19 + TypeScript
- **スタイリング**: Tailwind CSS v4
- **ビルドツール**: Vite + @crxjs/vite-plugin
- **ストレージ**: Chrome Storage API (chrome.storage.sync)

## ファイル構成

```
memo-extension/
├── src/
│   ├── Popup.tsx      # Reactコンポーネント
│   ├── main.tsx       # エントリーポイント
│   └── popup.css      # Tailwind CSSディレクティブ
├── manifest.json      # 拡張機能の設定ファイル
├── popup.html         # ポップアップHTML
├── vite.config.ts     # Vite設定
├── tsconfig.json      # TypeScript設定
├── tailwind.config.js # Tailwind CSS設定
├── postcss.config.js  # PostCSS設定
├── package.json       # 依存関係
├── icon.png           # 拡張機能アイコン
└── dist/              # ビルド出力（gitignore）
```

## 開発

### セットアップ

```bash
npm install
```

### ビルド

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。

### 開発モード

開発モードでは、ファイル変更時に自動的にリビルドされます（HMR対応）。

```bash
npm run dev
```

開発モード起動後、Chromeで拡張機能を読み込むと、コード変更が自動的に反映されます。ただし、manifest.jsonなど一部のファイルを変更した場合は、手動でリロードが必要です。

### テストとコード品質

コードをプッシュする前に、以下のコマンドで品質チェックを実行できます。

```bash
# TypeScript型チェック
npm run type-check

# ESLintによるコードチェックと自動修正
npm run lint:fix

# すべてのチェックを一括実行（型チェック + Lint + ビルド）
npm test
```

**推奨ワークフロー**:
1. コードを変更
2. `npm run lint:fix` で自動修正
3. `npm test` ですべてのチェックを実行
4. コミット・プッシュ

## ライセンス

MIT
