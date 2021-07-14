## カテゴリ動画検索アプリをつくりました。

### 不明点

- Label.js 内で materialUI を使用しようと思ったところ、下記のエラーにより実装できませんでした。
  > Cannot read property 'props' of undefined
  > [React 　イベント処理の中で「TypeError: Cannot read property ‘props’ of undefined」となる](https://ips.nekotype.com/5120/)
  > で戻り値として設定しましたが、エラーは続いたままで、原因がわかりませんでした。
  > [JavaScript で「Cannot read property ‘プロパティ名’ of undefined」エラーが出る原因と対処法を現役エンジニアが解説【初心者向け】](https://techacademy.jp/magazine/26836)
  > 確認しましたが、記事の内容でプロパティ名の指定ミスが書かれていたのですが、エラーが起きている場所が create-react-app で作成された部分なので、触れようと思わずこちらも断念しました。
