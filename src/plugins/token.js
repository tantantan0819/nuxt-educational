
import axios from 'axios';
import cookie from 'js-cookie'
import Config from './config';
import {md5} from './crypto'; // md5算法加密
import * as Util from './utils';

const User_id = Config.user_id;
const User_key = Config.user_key;
const App_id = Config.api_id;
const App_key = Config.api_key;

/**
 * 获取token
 * @returns {string | null}
 */
export function getToken() {
  return cookie.get('token');
}

/**
 * 设置token
 * @param token
 */
export function setToken(token) {
  return cookie.set('token', token)
}

/**
 * 检测token是否存在
 * @returns {boolean}
 */
export function checkToken() {
  return cookie.get('token') ? true : false;
}

/**
 * 删除token
 */
export function removeToken() {
  return cookie.remover('token')
}


/**
 * 设置站点siteId
 * @param id
 */
export function setSite(id) {
  return cookie.set('SiteId', id);
}

/**
 * 获取站点
 * @returns {string | null}
 */
export function getSite() {
  var siteId = cookie.get('SiteId')
  return siteId ? siteId : false;
}

/**
 * 移除站点
 */
export function removeSite() {
  return cookie.remove('SiteId')
}

/**
 * 签名token
 * @param timestamp
 * @param salt
 * @returns md5
 */
export function getTokenSign(timesTamp, salt) {
  var token = getToken();
  return md5(token + User_key + timesTamp + salt)
}

/**
 * 创建签名
 * @returns string(md5)}
 */
export function createSign($param, $timestamp, $salt) {
  var paramStr = Util.sortParamsToStr($param);
  return md5(User_id + User_key + paramStr + $timestamp + $salt)
}

export function createSignUtrack($param, $timestamp, $salt) {
  var paramStr = Util.sortParamsToStr($param);
  return md5(App_id + App_key + paramStr + $timestamp + $salt)
}

/**
 * 异步请求token
 * @returns {Promise<AxiosResponse<any>>}
 */
export function requestTokenAsync() {
  const timeStamp = Util.getUnixTime(); //时间戳
  const salt = Util.rendomString(5); //随机字符串5位，数字、大小写
  const headers = {
    'Api-Appid': User_id,
    'Api-Timestamp': timeStamp,
    'Api-Salt': salt,
    'Api-Sso': Config.user_id,
    'Api-Sign': createSign('', timeStamp, salt)
  }
  return axios.get('/token/get', {
    baseURL: Config.user_host,
    headers: headers
  }).then((res) => {
    var result = res.data;
    if (result.code !== 0) {
      return Promise.reject(result.msg);
    }
    setToken(result.data);
    return Promise.resolve(result.data)
  }).catch((error) => {
    return Promise.reject(error)
  })
}

/**
 * 同步请求token
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function requestTokenSync() {
  const timeStamp = Util.getUnixTime(); //时间戳
  const salt = Util.rendomString(5); //随机字符串4位，数字、大小写
  const headers = {
    'Api-Appid': User_id,
    'Api-Timestamp': timeStamp,
    'Api-Salt': salt,
    'Api-Sso': Config.user_id,
    'Api-Sign': createSign('', timeStamp, salt)
  }
  var res = await axios.get('/token/get', {
    baseURL: Config.user_host,
    headers: headers
  })
  var result = res.data;
  if (result.code !== 0) {
    throw new Error(result.msg)
  }
  return result.data;
}

/**
 * 异步请求siteId
 * @returns {Promise<AxiosResponse<any>>}
 */
export function requestSiteID() {
  return axios.get('token/ip', {
    baseURL: Config.user_host
  })
}

/**
 * 同步请求siteId
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function requestSiteIDSync(ip = '') {
  var res = await axios.get('token/ip?ip=' + ip, {
    baseURL: Config.user_host
  });
  var result = res.data;
  if (result.code !== 0) {
    throw new Error(result.msg);
  }
  return result.data;
}
