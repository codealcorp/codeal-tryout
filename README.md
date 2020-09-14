# codeal-tryout
The tryout project


## 環境構築

- node(>=12.0)が必要です。

- ローカル環境にnodeを入れたくない場合は、dockerコンテナを用意しましたので、下記コマンドでbuildをお願いいたします。

```
docker-compose build web
```

## 実行方法

### ローカル環境でnodeを動作させる場合

```
yarn install

yarn run tsc

yarn run fizzbuzz
```


### docker上で動作させる場合

```
# ローカル上で
docker-compose web bash

# コンテナ上で
yarn run fizzbuzz
```

## テスト

テストには`jest`を利用しています。

下記のコマンドでテストを実行してください

```
yarn run test
```
