# webpack 簡易demo
`使用簡單的時鐘頁面，演示webapck`

* [demo網址](https://nicehorse06.github.io/webpack_example_clock/dist/)

* 此node版本為 6.1.0

* 功能為每秒更新時間

* 運用webpack babel轉檔、引入CSS module

## 使用方法：

1. `git clone 這個專案`

2. 下 `npm install` 指令，載入所有npm包

3. `npm run dev` 指令，在記憶體裡產生bundle檔案，並執行測試server在 127.0.0.1:8080

4. `npm run build` 指令，實際產生bundle檔案在 dist/ 資料夾裡面

## webpack設定

* webpack目前功能有動態載入CSS、可使用JS ES6語法與模組、自動生成新的資料在dist/

* entry進入點為預設的值 ./src/index.js

* output輸出為預設值 ./dist/main.js

* 詳細參閱文件[url](https://webpack.js.org/concepts/)