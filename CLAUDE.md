# CLAUDE.md

このファイルは、このリポジトリで作業する際にClaude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

「Mini Memo」というChrome拡張機能です。ポップアップ形式のシンプルなメモアプリケーションで、Chrome のストレージAPIを使用してメモデータをローカルに保存します。

## アーキテクチャ

**Manifest V3拡張機能**: Chrome Extension Manifest V3形式を使用：
- `manifest.json` - 拡張機能の設定（storage権限を要求）
- `popup.html` - textareaを含むポップアップUI
- `popup.js` - メモ内容をlocalStorageに自動保存するJavaScript
- `popup.css` - 280px幅のポップアップウィンドウのスタイリング
- `icon.png` - 拡張機能のアイコン（全サイズ）

**データ永続化**: 現在はpopup.js内でlocalStorageを使用してメモ内容を保存しています（popup.js:5, 9行目）。manifest.jsonではChromeのストレージAPIのための"storage"権限を宣言していますが、実装ではlocalStorageを使用している点に注意してください。

**自動保存パターン**: メモはinputイベントごとに自動保存されます（popup.js:8-10行目）。明示的な保存ボタンは不要です。

## 拡張機能の読み込み方法

未パッケージのChrome拡張機能として読み込む手順：

1. Chromeで`chrome://extensions/`を開く
2. 右上の「デベロッパーモード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. このリポジトリのディレクトリを選択
5. ツールバーに拡張機能が表示されます

変更後にリロードする場合: `chrome://extensions/`で拡張機能カードの更新アイコンをクリック

## ファイル構造

すべてのソースファイルはルートディレクトリにあります：
- `manifest.json` - 拡張機能マニフェスト（Manifest V3）
- `popup.html` - ポップアップUI
- `popup.js` - ポップアップのロジック
- `popup.css` - ポップアップのスタイル
- `icon.png` - 拡張機能アイコン
