import http from './request.js'

export function testUrl_a(){
  return http.get('http://localhost:8080/hello');
}

export function testUrl_b(){
  return http.get('http://localhost:8081/JavaWeb_Servlet_Study/servlet/ServletDemo2');
}