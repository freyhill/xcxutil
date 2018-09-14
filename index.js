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
module.exports = {
  isArray: isArray,
  trim:trim
};
