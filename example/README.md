# Hiradumi example

Hiradumiを使った本の表示一覧のサンプル

## 使用データ

https://bookdata-fair.calil.dev/all.json

## hiradumi の参照

`package.json` の `"hiradumi": "file:.."` でリポジトリルートを直接リンクしている。
`npm install` すると `node_modules/hiradumi` がルートへのシンボリックリンクになり、
コミット済みの `lib/` がそのまま読まれる。`src/` を変えた結果を確認したいときは、
ルートで `npm run compile` して `lib/` を作り直すこと。

（以前は `github:CALIL/hiradumi#master` で自分自身を git 参照していたが、
master が進むたびに Dependabot が commit を追いかける PR を出し続けて終わらないため、
ローカル参照に変更した。）

## developement

```
npm install
npm start
```

## build

```
npm run build
```