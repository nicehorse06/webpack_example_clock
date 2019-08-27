// 此處引入main.css即可在webpack編譯時匯入到JS中
import style from '../style/main.css'
// 用webpack用es6模組引入功能
import setTime from './time'

setTime()
setInterval(setTime, 1000);