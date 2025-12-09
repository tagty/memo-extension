# Mini Memo

シンプルなポップアップ型メモ Chrome拡張機能

## 概要

Mini Memoは、Chromeツールバーから素早くアクセスできるシンプルなメモアプリです。テキストは自動保存され、いつでも簡単にメモを取ることができます。

## 機能

- ポップアップ形式のシンプルなメモ入力
- 自動保存（入力と同時に保存）
- localStorage によるローカルストレージ
- 軽量でシンプルなUI

## インストール

### 開発版として読み込む

1. `npm run build` でビルドを実行
2. Chromeで `chrome://extensions/` を開く
3. 右上の「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. `dist/` ディレクトリを選択
6. ツールバーに拡張機能アイコンが表示されます

### 変更を反映する

コードを変更した後は、`npm run build` で再ビルドし、`chrome://extensions/` で拡張機能カードの更新アイコンをクリックしてください。

## 使い方

1. ツールバーの Mini Memo アイコンをクリック
2. ポップアップが開いたらメモを入力
3. 入力内容は自動的に保存されます
4. 次回アイコンをクリックすると、前回のメモが表示されます

## 技術スタック

- **Manifest V3**: Chrome Extension Manifest V3形式
- **フロントエンド**: React 19
- **ビルドツール**: Vite + @crxjs/vite-plugin
- **ストレージ**: localStorage API

## ファイル構成

```
memo-extension/
├── src/
│   ├── Popup.jsx      # Reactコンポーネント
│   ├── main.jsx       # エントリーポイント
│   └── popup.css      # スタイル
├── manifest.json      # 拡張機能の設定ファイル
├── popup.html         # ポップアップHTML
├── vite.config.js     # Vite設定
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

```bash
npm run dev
```

## ライセンス

MIT
