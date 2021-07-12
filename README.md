## カテゴリ動画検索アプリをつくりました。

前回、提出したものでは、複数動画取得ができませんでしたが、今回できるようになったので、ご確認お願いします。

### 不明点

- Label.js 内で materialUI を使用しようと思ったところ、下記のエラーにより実装できませんでした。
  > Cannot read property 'props' of undefined
  > [React 　イベント処理の中で「TypeError: Cannot read property ‘props’ of undefined」となる](https://ips.nekotype.com/5120/)
  > で戻り値として設定しましたが、エラーは続いたままで、原因がわかりませんでした。
- App.js の 26〜28 行目のところで Youtube の動画をそれぞれ異なる変数に格納して配置しています。これを配列のように詰め、その後 map で展開すれば
  定義するところから含めてコード量が少なくなり、綺麗になると思うのですが、今まで通りのやり方で配列を展開し、それに詰めていく方法だと配列の中に何も入らず
  うまくいきませんでした。アドバイスが欲しいです。

### 改善点

- App.js が 90 行ほどになってしまっていて、多い印象を持ちました。コンポーネント化をもう少ししたいのですが、props の参照や、
  動画を検索するにおいて必要になる変数 val などが各コンポーネントにまたがっており、難航しています、、（引き続きできる限りコンポーネントを小さくします。）
- App.js のインポート量が多すぎて見栄えが悪いと感じてしまうのですが、どこかに別のモジュールに避難させてそれをまとめて持ってくるなど可能でしょうか。

お忙しいとは思いますが、先日の課題の点も含んでいると思うので、こちらをみていただければと思います。
