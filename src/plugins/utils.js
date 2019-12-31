import {md5} from './crypto'; // md5算法加密

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.removeItem(name);
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  var data = window.localStorage.getItem(name);
  return JSON.parse(data);
}

/**
 * 删除localStorage
 * @param name
 * @returns
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name)
}

/**
 * 存储sessionStorage
 * @param name
 * @returns
 */
export const setSession = (name, content) => {
  if (!name) return;
  if (typeof content != 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取sessionStorage
 * @param name
 * @returns
 */
export const getSession = name => {
  if (!name) return;
  var data = window.sessionStorage.getItem(name);
  if (typeof data != 'string') {
    data = JSON.parse(data)
  }
  return data;
}

/**
 * 删除sessionStorage
 * @param name
 * @returns
 */
export const removeSession = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name)
}

/**
 * 随机字符串(包含大写字母、小写字母、数字）
 * @param len
 * @returns {string}
 */
export function rendomString(len = 6) {
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
  var charsLen = chars.length;
  var rendomCode = "";
  for (var i = 0; i < len; i++) {
    rendomCode += chars.charAt(Math.floor(Math.random() * charsLen))
  }
  return rendomCode
}

/**
 * 清除数组中的空项('',null,undefined)
 * @param arr
 * @returns {Array}
 */
export function rodEmpty(arr) {
  var newArr = [];
  arr.map((item) => {
    if (item) newArr.push(item);
  });
  return newArr;
}

/**
 * 判断变量为空
 * @param obj
 * @returns {boolean}
 */
export function isEmpty(obj) {
  switch (typeof obj) {
    case 'undefined':
      return true;
      break;
    case 'number':
      if (obj === 0 || isNaN(obj)) {
        return true;
      }
      break;
    case 'boolean':
      if (!obj) {
        return true;
      }
      break;
    case 'string':
      if (obj.trim() == '') {
        return true
      }
      break;
    case 'Object':
      if (obj === null || obj.length == 0) {
        return true;
      }
      for (var i in obj) {
        return false;
      }
      return true;
      break;
  }
  return false;
}

/**
 * 时间戳
 * @returns {number}
 */
export function getUnixTime() {
  return parseInt(Date.now() / 1000);
}

/**
 * 数据字典排序
 * @param data
 * @returns {string}
 */
//如果key的值为null
export function sortParamsToStr(data) {
  var queryString = '';
  if (!isEmpty(data)) {
    const keys = Object.keys(data).sort();
    var newData = [];
    for (let i of keys) {
      if (typeof data[i] !== 'undefined') {
        newData.push(i + '=' + data[i].toString().trim());
      }
    }
    queryString = newData.join('&');
  }
  return queryString;
}

/**
 * 对象合并
 * @param target
 * @param source
 * @returns {*}
 */
export function objectMerge(target, source) {
  //合并两个对象，如果有相同的属性，则后面的会覆盖前面的
  if (typeof target !== 'object') {
    target = {}
  }
  for (const property in source) {
    if (target.hasOwnProperty(property)) {
      const sourceProperty = source[property];
      if (typeof sourceProperty === 'object') {
        target[property] = objectMerge(target[property], sourceProperty);
        continue
      }
    }
    target[property] = source[property]
  }
  return target;
}

export function deepMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    if (!Array.isArray(target)) {
      return source.slice();
    } else {
      for (const subProperty in source) {
        if (target.hasOwnProperty(subProperty)) {
          const subProperty = source[subProperty]
          if (typeof subProperty === 'object') {
            target[subProperty] = objectMerge(target[subProperty], subProperty)
            continue
          }
        }
        target[subProperty] = source[subProperty]
      }
      return target;
    }
  }
  for (const property in source) {
    if (target.hasOwnProperty(property)) {
      const sourceProperty = source[property];
      if (typeof sourceProperty === 'object') {
        target[property] = objectMerge(target[property], sourceProperty);
        continue
      }
    }
    target[property] = source[property]
  }
  return target;
}

/**
 * 随机数
 * @param len
 * @returns {string}
 */
export function randomString(len) {
  len = len || 6;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
  var maxPos = chars.length;
  var pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 时间格式转换：xxxx-xx-xx转为xxxx年xx月xx日
 * @param time
 * @returns {string}
 */
export function dateTime(time) {
  let newTime
  if(time){
    let arr = time.split('-');
    newTime = arr[0] + '年' + arr[1] + '月' + arr[2] + '日'
  }
  return newTime;
}

/**
 * 格式化时间: 2018-3-4
 * @param nS 时间字符串
 * @returns {string}
 */

export function dateFormat(date) {
  if(date){
    return date.getFullYear()+ '-'+date.getMonth()+'-'+date.getDay();
  }
}

/**
 * 创建当前时间: 2019-10-22
 * @param xx
 * @returns {string}
 */

export function nowDate() {
   let date = new Date();
   return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}


/**
 * 深度克隆
 * @param source
 * @returns {*}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}
/**
 * 属性为空的对象
 * @param obj
 * @returns {*}
 */
export function emptyObj(obj) {
  let flag = true;
  for(let i in obj){
    if(obj[i] != ''){
      flag = false;
    }
  }
  return flag;
}

export function qinniuKey(id){
    const timeStamp = getUnixTime(); //时间戳
    const salt = rendomString(6); //随机字符串6位，数字、大小写
    return md5(id + timeStamp + salt)
}
