# CLAUDE.md

このファイルは、このリポジトリで作業する際にClaude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

「Mini Memo」というChrome拡張機能です。ポップアップ形式のシンプルなメモアプリケーションで、localStorageを使用してメモデータをローカルに保存します。React 19とViteを使用したモダンな構成になっています。

## アーキテクチャ

**Manifest V3拡張機能**: Chrome Extension Manifest V3形式を使用

**フロントエンド**: React 19を使用したコンポーネントベースの構成：
- `src/Popup.jsx` - メインのReactコンポーネント（メモ入力とlocalStorage連携）
- `src/main.jsx` - Reactのエントリーポイント
- `src/popup.css` - 400px幅、320px高のポップアップウィンドウのスタイリング

**ビルド環境**:
- Vite - 高速なビルドツール
- @crxjs/vite-plugin - Chrome拡張機能用のViteプラグイン
- ビルド成果物は `dist/` ディレクトリに出力

**その他のファイル**:
- `manifest.json` - 拡張機能の設定（storage権限を要求）
- `popup.html` - Reactアプリのマウントポイント
- `icon.png` - 拡張機能のアイコン（全サイズ）

**データ永続化**: src/Popup.jsx内でlocalStorageを使用してメモ内容を保存しています。useEffectで初期読み込み、onChangeイベントで自動保存を実装。

**自動保存パターン**: メモはReactのonChangeイベントごとに自動保存されます。明示的な保存ボタンは不要です。

## 開発環境のセットアップ

### 初回セットアップ

```bash
npm install
```

### ビルド

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。

## 拡張機能の読み込み方法

未パッケージのChrome拡張機能として読み込む手順：

1. `npm run build` でビルドを実行
2. Chromeで`chrome://extensions/`を開く
3. 右上の「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. `dist/` ディレクトリを選択
6. ツールバーに拡張機能が表示されます

変更後にリロードする場合: `npm run build` で再ビルドし、`chrome://extensions/`で拡張機能カードの更新アイコンをクリック

## ファイル構造

```
memo-extension/
├── src/                # ソースコード
│   ├── Popup.jsx      # メインReactコンポーネント
│   ├── main.jsx       # Reactエントリーポイント
│   └── popup.css      # スタイル
├── manifest.json      # 拡張機能マニフェスト（Manifest V3）
├── popup.html         # HTMLエントリーポイント
├── vite.config.js     # Vite設定
├── package.json       # 依存関係とスクリプト
├── icon.png           # 拡張機能アイコン
├── dist/              # ビルド出力（gitignore）
└── node_modules/      # npm依存関係（gitignore）
```
