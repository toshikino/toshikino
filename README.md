# Project

numjucksのhtmlテンプレートエンジンです。

プロジェクトごとに使いやすいよう書き換えて構いません。

## セットアップ

```bash
# 初回インストール or パッケージが追加された場合
$ yarn install

# 開発モード
$ yarn dev

# ビルドファイル生成
$ yarn build
```


## ディレクトリ構造

### babel

JavaScriptを管理するディレクトリです。

機能を追加する場合は`bable/common`直下にjsファイルを作成して`babel/index.js`で読み込んでください。

### html

HTMLを管理するディレクトリです。

`html/_templates`配下は繰り返し使うパーツ（icons）やレイアウトを形成するパーツ（header）を格納してます。

`html/frameworks/_index.html`はhtmlの雛形なので、適宜metaタグなど調整してください。

`html/_templates`を除くファイルはそのままページになるので必要なページを追加して作成してください。

metaタグのtitle、description、ogタグなどは`index.html`に記述してある`set metadata`でそれぞれ設定可能です。他に追加する項目があれば追加してください。

```
{# meta #}
{% set metadata = {
  'description': '',
  'title': '',
  'url': ''
} %}
```

### images

画像を管理するディレクトリです。

自動で画像を圧縮するようタスク設定をしてます。

### SCSS

CSSを管理するディレクトリです。

**CSS設計**

SMACSSをベースにしてますが、適宜使いやすいよう変更して大丈夫です。

[CSS設計とは？](https://depart-inc.com/blog/css-design/)

**リセットCSS**

`scss/global/_reset.css`でdestyle.cssを使ってますが、適宜変更して大丈夫です。

## static

フォントファイルなど画像以外の静的ファイルを管理するディレクトリです。

buildファイル直下にデータが生成されるようにしてるのでリンクの指定に気をつけてください。