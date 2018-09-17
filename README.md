> xcxutil 是一个用于小程序开发使用的公共函数库，包括一些常用函数，弹框提示等功能，极大提高开发效率


* 📦 <1kb
* 👀 clean function
* 🐅 strong

---
## Getting Started

#### install
```
npm install xcxutil
```
#### use
```
let xcxutil = require("xcxutil");

xcxutil.isArray([1,2,3]); //true
```
#### api

api | 用途 | 实例
---|---|---
isArray |  是否为数组 | ```xcxutil.isArray([1,2,4])```
trim | 去掉空格|```xcxutil.trim(" xx ")```
getQueryString | 获取参数| ```xcxutil.getQueryString("name")```
isObjEmpty| 检查对象是否为空|```xcxutil.isObjEmpty({}) //true```
nowDate| 当前时间 | ```xcxutil.nowDate("-") // 2018-09-17```
modal| 弹出框|```xcxutil.modal("这是一个提示") ```
toast| 弹出层|```toast("这是一个提示").then(()=>{console.log("回首页")})```
