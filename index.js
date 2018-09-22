
'use strict';

let toString = Object.prototype.toString;

/**
 * [判断一个值是否为数组]
 *
 * @param {Array} val 测试的值
 * @returns {boolean} 如果是数组返回true，如果非数组返回false
 */
function isArray(val) {
  return toString.call(val) === "[object Array]";
}

/**
 * [判断一个值是否为对象]
 *
 * @param {Object} val 测试的值
 * @returns {boolean} 如果是对象返回true，如果非对象返回false
 */
function isObject(val) {
  return toString.call(val) === "[object Object]";
}

/**
 * [去掉空格]
 *
 * @param {String} str 带有空格的字符串
 * @returns {String} 去掉空格的字符串
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * [获取url参数值]
 *
 * @param {String} name  参数key
 * @returns {String} 返回值value
 * example url: https://www.leinov.com/?from=github
 * use getQueryString(from)
 * return github
 */
function getQueryString(name){
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
 	let r = window.location.search.substr(1).match(reg);
 	if (r != null) return unescape(r[2]);
 	return null;
}

/**
 * [是否为空对象]
 *
 * @param {Obj} obj 参数为对象
 * @returns {boolean} 返回值为布尔值
 */
function isObjEmpty(obj){
	for(let name in obj){
	   if(obj.hasOwnProperty(name)){
	     return false;
	   }
	}
	return true;
}

/**
 * [检查是否为电话号码]
 *
 * @param {Number} phone //8
 * @returns {Boolean} // true
 */
function isPhoneNum(phoneNum) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if(!reg.test(phoneNum)) {
    return false;
  }
  return true;
}

/**
 * [获取两个数组的交集]
 *
 * @param {Array} arr1 //[1,2,3,4,5,8,9]
 * @param {Array} arr2 //[1,11,9]
 * @returns {Array} key // [1,9]
 */
function interArray(arr1, arr2, key) {
  let commonarr = arr1.filter((x) => {
    if(key) {
      return arr2.includes(x[key])
    } else {
      return arr2.includes(x)
    }
  })
  return commonarr;
}

/**
 * [获取当前的日期]
 *
 * @param {string} type '-'
 * @returns {string}  '2018-09-16'
 */
function nowDate(type = '-') {
  const date = new Date();
  const year = date.getFullYear();
  const month = datePlus0(new Date().getMonth() + 1);
  const currentDate = datePlus0(new Date().getDate());
  return `${year}${type}${month}${type}${currentDate}`;
}

/**
 * [补0]
 *
 * @param {Number} x //8
 * @returns {String} // 08
 */
function datePlus0(x) {
  if(x < 10) {
    return `0${x}`;
  } else {
    return x
  }
}

/**
 * [弹出确认窗口]
 *
 * @param {String} text //8
 * @param {String} title // 08
 */
function modal(text, title = '提示') {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title,
      content: text,
      showCancel: false,
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
}

/**
 * [提示弹层]
 *
 * @param {String} title  显示内容
 * @param {Number} duration 显示时间
 * @param {String} icon  图标
 */
 function toast(title, duration=2000, icon = 'success') {
   return new Promise((resolve,reject)=>{
     wx.showToast({
       title: title,
       icon: icon,
       mask: true,
       duration: duration,
       success:function(){
         setTimeout(()=>{
           resolve();
         },duration)
       }
     });
   })
 }

/**
* [保存本地数据]
*
* @param {String} key 保存的key
* @param {String} value 保存的value
*/
function setStorage(key,value) {
  return new Promise((resolve,reject)=>{
    wx.setStorage({
      key:key,
      data:value,
      success:()=>{
        resolve();
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}

/**
 * [获取本地存储]
 *
 * @param {String} key 保存的key
 */
 function getStorage(key) {
   return new Promise((resolve,reject)=>{
     wx.getStorage({
       key:key,
       success:(res)=>{
         resolve(res.data)
       },
       fail:()=>{
         reject()
       }
     })
   })
 }

/**
 * [打电话]
 *
 * @param {String} phoneNumber 电话号码
 */
function phoneCall(phoneNumber) {
  wx.makePhoneCall({
     phoneNumber: phoneNumber
   })
}

/**
 * [复制]
 *
 * @param {String} data 复制的内容
 * @param {String} tip 提示信息
 */
 function copy(data,tip){
   wx.setClipboardData({
     data: data,
     success: function(res) {
       wx.getClipboardData({
         success: function(res) {
           toast(tip)
         }
       })
     }
   })
 }

module.exports = {
  isArray: isArray,
  isObject:isObject,
  trim:trim,
  getQueryString:getQueryString,
  isObjEmpty:isObjEmpty,
  isPhone:isPhone,
  interArray:interArray,
  nowDate:nowDate,
  modal:modal,
  toast:toast,
  setStorage:setStorage,
  getStorage:getStorage,
  phoneCall:phoneCall,
  copy:copy
};
