# CatalystでLiveReloadをしよう

Node.jsのgruntを使ってファイルの更新を監視、ブラウザのリロードを行う。  
前提としてNode.jsが必要。導入は[こちら](https://github.com/neeerveless/node)こちらを参照。

## grunt-cliをインストール
gruntを実行するために必要なのでインストールする。

```:command
$ npm install -g grunt-cli
```

## LiveReloadの準備
### 監視プロセスの準備

```:command
$ cp Grungfile.js path_to_catalyst_application/
$ cp package.json path_to_catalyst_application/
$ cd path_to_catalyst_application && npm install
```
※Grungfile.jsは必要に応じて変更しよう。コメント参照。  

### ブラウザプラグインの準備
[こちら](http://livereload.com/extensions/)から自分の使っているブラウザのプラグインをインストール。  
FireFoxのプラグインでは設定がなかったのでLiveReloadの接続先がlocalhost:35729になってた。  
VirtualBoxで開発している場合はポートフォワーディングの設定が必要。  
![ポートフォワーディング](/images/port_forward.png)

## LiveReloadのスタート
1.Catalystサーバを起動する  
2.監視プロセス起動  
3.ブラウザでサーバに接続する  
4.ブラウザからLiveReloadに接続する  

### 2.監視プロセス起動

```:command
$ cd path_to_catalyst_application
$ grunt
```

### 4.ブラウザからLiveReloadに接続する
↓にあるブラウザのアイコンを押してLiveReloadに接続する。失敗のダイアログがでてもくじけず連打ｗ  
![無効](/images/before.png)  
↓になったら有効になってる  
![有効](/images/after.png)  

後は実際にソースコードを編集してみよう！



