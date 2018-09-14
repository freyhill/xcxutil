'use strict';
var toString = Object.prototype.toString;

/**
 * 判断一个值是否为数组
 *
 * @param {Object} val 测试的值
 * @returns {boolean} 如果是数组返回true，如果非数组返回false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * 去掉空格
 *
 * @param {String} str 带有空格的字符串
 * @returns {String} 去掉空格的字符串
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * 获取url参数值
 *
 * @param {String}   参数key
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
 * 是否为空对象
 *
 * @param {Obj}   参数为对象
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

module.exports = {
  isArray: isArray,
  trim:trim,
  getQueryString:getQueryString,
  isObjEmpty:isObjEmpty
};
