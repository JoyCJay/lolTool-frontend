import http from './request.js'

function testUrl() {
  return http.get('');
}

function cube(x) {
  return x * x * x;
}

export {testUrl, cube};
