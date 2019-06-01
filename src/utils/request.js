/* eslint-disable no-console */
import axios from 'axios'

// axios.defauls.baseURL = process.env.BASE_API;
// axios.defaults.withCredentials = true;
// axios.defaults.timeout = 100000;

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const http = axios.create({
  // baseURL: 'http://localhost:9090',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: 100000
});

// axios拦截器
http.interceptors.response.use(
    response => {
      // 判断后台返回数据携带的请求码
      if (response.status === 200 || response.status === '200') {
        return response.data;
      } else {
        // 非200请求报错
        console.log({
          message: response.message || '服务异常'
          //iconClass: 'icon icon-success'
        });
        //throw Error(response.data.msg || '服务异常');
      }
    }, error => {
      // let parsedError = {...error};
      // const response = parsedError.response;
      // if (Object.keys(response).length === 0) {
      //   Toast({
      //     message: '连接超时，请重试'
      //   });
      // } else {
      //   Toast({
      //     message: response.data.message || '服务异常'
      //   });
      // }
      console.error(error);
    });

export default http;


