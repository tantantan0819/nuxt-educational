/**
 * 请求相关的方法
 * User: liuxiaolin
 * Date: 2018/3/2
 * Time: 11:06
 */

import axios from 'axios';
import {MessageBox} from 'element-ui';
import Config from './config';
import * as Util from './utils';
import {getToken, getTokenSign, requestTokenSync, createSignUtrack, setToken} from './token';

/**
 * Access Token 不能为空
 */
const ERROR_TOKEN_EMPTY = 2030;

/**
 * Access Token 无效
 */
const ERROR_TOKEN_INVALID = 2040;

/**
 * Access Token 过期
 */
const ERROR_TOKEN_EXPIRE = 2050;

/**
 * 需要登录访问
 */
const ERROR_NEED_LOGIN = 3000;


// 创建 axios 实例
const service = axios.create({
  baseURL: Config.api_host, // api的base_url
  timeout: 10000, // request timeout
  retry: 3,
  retryDelay: 500,
  shouldRetry: (error) => true,
});

// 请求拦截
service.interceptors.request.use(async function (config) {
  if (!config.headers["Api-Token"]) {
    if (process.server) {
      //同步请求token
      var tokenData = await requestTokenSync();
      global.token = tokenData.token;
      config.headers["Api-Token"] = tokenData.token;
    } else {
      //同步请求token
      let tokenData = await requestTokenSync();
      setToken(tokenData.token);
      config.headers["Api-Token"] = tokenData.token;
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  MessageBox({
    message: '网络错误,请稍后再试',
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/**
 * 返回的 http对象请求
 * @type {{get: http.get, post: http.post, request: http.request}}
 */
const http = {

  /**
   * 参数过滤
   * @param obj
   * @returns {{}}
   */
  filter: function (obj) {
    let tmp = Object.entries(obj);
    let res = {};
    tmp.filter(function (item) {
      return item[1] !== "" && item[1] !== null && item[1] !== undefined;
    }).forEach(function (val) {
      res[val[0]] = val[1];
    });
    return res;
  },
  /**
   * GET 请求
   * @param url
   * @param data
   * @returns {*}
   */
  get: function (url, data = {}, cache = 10000) {
    if (cache != true) {

    }
    const config = {
      url: Config.api_host + url,
      method: 'get',
      params: this.filter(data),
    };
    return http.request(config)
  },

  /**
   * POST 请求
   * @param url
   * @param data
   * @returns {*}
   */
  post: function (url, data = {}) {
    const config = {
      url: Config.api_host + url,
      method: 'post',
      data: this.filter(data),
    };
    return http.request(config)
  },

  request: function (config) {
    const timestamp = Util.getUnixTime();
    const salt = Util.randomString(5);
    const config_bak = config;

    var msg = '';
    if (process.server) {
      var token = global.token;
      msg = 'server';
    } else {
      var token = getToken();
      msg = 'client'
    }
    if (token == '') {
      throw new Error('token 不能为空');
    }
    const conf = {
      headers: {
        "Api-Appid": Config.api_id,
        "Api-Salt": salt,
        "Api-Timestamp": timestamp,
        "Api-Version": Config.api_version,
        "Api-Token": token,
        'Api-Utrack': Config.api_id,
        "Api-Token-Sign": getTokenSign(timestamp, salt),
      }
    };

    //合并对象
    Util.objectMerge(conf, config);
    if (conf.method == "post") {
      conf.headers['Api-Sign'] = createSignUtrack(config.data, timestamp, salt);
    }

    return service.request(conf).then(async function (response) {
      const res = response.data;
      if (res.code !== 0) {
        // Token 过期了重试

        if (res.code == ERROR_TOKEN_EMPTY || res.code === ERROR_TOKEN_INVALID || res.code === ERROR_TOKEN_EXPIRE) {
          if (process.server) {

            //同步请求token
            var tokenData = await requestTokenSync();
            global.ctx.cookies.set('token', tokenData.token, {path: "/", httpOnly: false});
            global.token = token = tokenData.token;
          } else {

            //同步请求token
            var tokenData = await requestTokenSync();
            setToken(tokenData.token);
            token = tokenData.token;
          }

          //重新发起axios请求
          return http.request(config_bak);

          //处理需要登录的情况
        } else if (res.code === ERROR_NEED_LOGIN) {
          Util.setStore('isLogin', '0');
          MessageBox({
            message: '登录已失效，前往登录页面重新登录~~',
            type: 'error',
            duration: 5 * 1000
          }).then(() => {
            window.location.href='/login'
          }).catch(action => {
            window.location.href='/login'
          });

        } else {
          MessageBox({
            message: res.msg,
            type: 'error',
            duration: 5 * 1000
          });
          return Promise.reject(res.msg);
        }

      } else {
        return Promise.resolve(res.data);
      }
    })
  }
};

export default http
