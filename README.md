# hiradumi

書影をレイアウトするWeb Components

## コンセプト

- 指定された横幅に収まるレイアウト
- アスペクト比の違う書影を組み合わせて配置できる
- 横幅の変化に追従する
- npmに公開する


## 利用方法

### browser

```
<script src="https://unpkg.com/@calil/hiradumi@2.0.0/dist/hiradumi.bundle.js"></script>
<hiradumi></hiradumi>
```

### React

```
import Hiradumi from '@calil/hiradumi'

const Component = () => {
    return (<Hidarumi></Hidarumi>)
}

```


## development

```
npm install
npm start
```

## test

```
npm run test
```

## publish to npm

```
npm run publish
```