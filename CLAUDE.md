# CLAUDE.md

このファイルは、このリポジトリで作業する際にClaude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

「Mini Memo」というChrome拡張機能です。ポップアップ形式のモダン・ミニマルなメモアプリケーションで、localStorageを使用してメモデータをローカルに保存します。React 19、TypeScript、Tailwind CSS、Viteを使用したモダンな構成になっています。

### デザインの特徴

- **モダン・ミニマル**: グラデーション背景、美しいシャドウ、スムーズなアニメーション
- **アクセントカラー**: インディゴ-パープルのグラデーション
- **文字数カウンター**: メモ入力時にリアルタイムで文字数を表示
- **リサイズ可能**: テキストエリアのサイズを自由に調整可能

## アーキテクチャ

**Manifest V3拡張機能**: Chrome Extension Manifest V3形式を使用

**フロントエンド**: React 19 + TypeScriptを使用したコンポーネントベースの構成：
- `src/Popup.tsx` - メインのReactコンポーネント（メモ入力とlocalStorage連携、型安全）
- `src/main.tsx` - Reactのエントリーポイント
- `src/popup.css` - Tailwind CSSディレクティブ（@tailwind base/components/utilities）

**スタイリング**: Tailwind CSS v4を使用したユーティリティファーストのスタイリング：
- モダン・ミニマルデザイン（グラデーション背景、シャドウ、アニメーション）
- インディゴ-パープルのアクセントカラー
- ユーティリティクラスによる高速な開発
- `tailwind.config.js` - カスタムテーマ設定
- `postcss.config.js` - @tailwindcss/postcssプラグイン設定
- レスポンシブデザインとダークモード対応の準備

**型システム**:
- TypeScript strict mode有効
- React、Chrome拡張機能APIの型定義を使用
- `tsconfig.json` でコンパイラオプションを管理

**ビルド環境**:
- Vite - 高速なビルドツール（TypeScript対応）
- @crxjs/vite-plugin - Chrome拡張機能用のViteプラグイン
- ビルド成果物は `dist/` ディレクトリに出力

**その他のファイル**:
- `manifest.json` - 拡張機能の設定（storage権限を要求）
- `popup.html` - Reactアプリのマウントポイント
- `vite.config.ts` - Vite設定（TypeScript）
- `icon.png` - 拡張機能のアイコン（全サイズ）

**データ永続化**: src/Popup.tsx内でlocalStorageを使用してメモ内容を保存しています。useEffectで初期読み込み、onChangeイベントで自動保存を実装。型安全な実装により、バグの早期発見が可能。

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

### 開発モード

開発時は以下のコマンドでViteの開発サーバーを起動できます：

```bash
npm run dev
```

開発モードでは：
- ファイル変更時に自動的にリビルド（HMR対応）
- @crxjs/vite-pluginがChrome拡張機能の開発に最適化された環境を提供
- コンポーネントの変更が即座に反映される

**注意**: manifest.jsonなど一部のファイルを変更した場合は、Chrome拡張機能の手動リロードが必要です。

## 拡張機能の読み込み方法

未パッケージのChrome拡張機能として読み込む手順：

1. 依存関係をインストール（初回のみ）
   ```bash
   npm install
   ```

2. ビルドまたは開発モードを起動
   ```bash
   npm run build  # 本番ビルド
   # または
   npm run dev    # 開発モード
   ```

3. Chromeで`chrome://extensions/`を開く
4. 右上の「デベロッパーモード」を有効にする
5. 「パッケージ化されていない拡張機能を読み込む」をクリック
6. `dist/` ディレクトリを選択
7. ツールバーに拡張機能が表示されます

### 変更を反映する方法

- **開発モード使用時**: ほとんどの変更は自動的に反映されます
- **本番ビルド使用時**: `npm run build` で再ビルドし、`chrome://extensions/`で拡張機能カードの更新アイコンをクリック

## ファイル構造

```
memo-extension/
├── src/                # ソースコード（TypeScript）
│   ├── Popup.tsx      # メインReactコンポーネント
│   ├── main.tsx       # Reactエントリーポイント
│   └── popup.css      # Tailwind CSSディレクティブ
├── manifest.json      # 拡張機能マニフェスト（Manifest V3）
├── popup.html         # HTMLエントリーポイント
├── vite.config.ts     # Vite設定（TypeScript）
├── tsconfig.json      # TypeScript設定
├── tailwind.config.js # Tailwind CSS設定
├── postcss.config.js  # PostCSS設定
├── package.json       # 依存関係とスクリプト
├── icon.png           # 拡張機能アイコン
├── dist/              # ビルド出力（gitignore）
└── node_modules/      # npm依存関係（gitignore）
```
