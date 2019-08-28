# webpack 簡易demo
`使用簡單的時鐘頁面，演示webapck`

* [demo網址](https://nicehorse06.github.io/webpack_example_clock/dist/)

* 此node版本為 6.1.0

* 功能為每秒更新時間

* 運用webpack babel轉檔、引入CSS module

* webpack產生的結果於dist/中

## 使用方法：

1. `git clone 這個專案`

2. 下 `npm install` 指令，載入所有npm包

3. `npm run dev` 指令，在記憶體裡產生bundle檔案，並執行測試server在 127.0.0.1:8080

4. `npm run build` 指令，實際產生bundle檔案在 dist/ 資料夾裡面

## 參考網址
* [webpack](https://webpack.js.org/concepts/)

## webpack設定

* webpack目前功能有動態載入CSS、可使用JS ES6語法與模組、自動生成新的資料在dist/

* entry進入點為預設的值 ./src/index.js

* output輸出為預設值 ./dist/main.js

* 詳細參閱文件[url](https://webpack.js.org/concepts/)

## webpack 核心概念
* Entry
* Output
* Loaders
* Plugins

### Entry
webpack 依據 entry point 去找出哪一個檔案為建構相依關係的起始檔案，webpack 預設為 ./src/index.js，但也可以自己設定
```
// webpack.config.js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

### Output
Output 屬性告訴 webpack 哪裡放置產生的bundle檔案和該檔案的命名，預設主要輸出檔案為 ./dist/main.js ，而 ./dist 也會有其他廠生的檔案．
```
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```
上面 `output.filename` 和 `output.path`和告訴 webpack bundle的去處，其中path 為 Node.js 的 API．

### Loaders
webpack 只了解 Javascript 檔案，Loaders 讓 webpack 可以處理其他形態的檔案，然後轉換成有效的 modules，可以在我們的應用程式中使用和加入到dependency graph.
*注：引入其他的檔案(CSS, png)的功能僅限用在 webpack*
loaders 有兩個屬性配置：

1. test 屬性指出什麼樣的檔案應該被轉換
2. use 屬性指出應該使用什麼 loader 來轉換
```
// webpack.config.js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

以上定義了 rules 屬性和 rules 裡面的 test 和 use 屬性，這告訴 webpack 在製作 bundle 之前，請先用 ‘raw-loader’ 轉換所有 ‘.txt’ 檔的 require()/import

### Plugins
要使用 plugin 需要 require 它，然後放在 plugin array，一個 plugin 可以使用在不同情況使用不同的 option 並多次使用，使用前需要 new 一個 instance．
```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
上式中 html-webpack-plugin 產生一個 html file 在每一個 bundle 當中

### Mode
By setting the mode parameter to either development, production or none, you can enable webpack’s built-in optimizations that correspond to each environment. The default value is production.
module.exports = {
  mode: 'production'
};
