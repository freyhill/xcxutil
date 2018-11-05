> xcxutil 是一个用于小程序开发使用的公共函数库，包括一些常用函数，弹框提示等功能，极大提高开发效率


* 📦 small
* 👀 clean
* 🐅 strong

---
## Getting Started

### install
```
npm install xcxutil
```
### use  
```
let xcxutil = require("xcxutil");

xcxutil.isArray([1,2,3]); //true

xcxutil.copy('这是一段文字','复制成功啦')

```
### api

|api | 用途 | 实例
|:----|:----|:---|
isArray |  是否为数组 | ```xcxutil.isArray([1,2,4])```
isObject| 是否为对象| ```xcxutil.isObject({})```
trim | 去掉空格|```xcxutil.trim(" xx ")```
isPhoneNum | 校验电话号码  | ```xcxutil.isPhoneNum(phonenum)```
isObjEmpty| 检查对象是否为空|```xcxutil.isObjEmpty({}) //true```
nowDate| 当前时间 | ```xcxutil.nowDate("-") // 2018-09-17```
modal| 弹出框|```xcxutil.modal("这是一个提示") ```
toast| 弹出层|```toast("这是一个提示").then(()=>{console.log("回首页")})```
setStorage|存储localStorage| ```xcxutil.setStorage("token","abs")```
getStorage|获取localStorage|```xcxutil.getStorage("token").then((data)=>{//use data})```
phoneCall | 打电话  |```xcxutil.phoneCall('13411111111')```
copy|复制文本 | ```xcxutil.copy('文本','提示')```
deepCopy|深拷贝 | ```xcxutil.deepCopy(obj)```

* 👀 持续更新 欢迎[fork & star](https://github.com/leinov/xcxutil)
