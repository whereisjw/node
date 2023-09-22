11. HTTP/HTTPS
    1)HTTP/HTTPS
    -Hypertext Transfer Protocol
    (Request - Response Protocol)

<HTTP>
          request(URL:http://www.naver.com/index.do)
client ----------------> server
       <----------------
          response(HTML)
               |
        데이터를 가로채는 경우발생

<HTTPS>
-Hypertext Transfer Protocol Secure
          request(URL:https://www.naver.com/index.do)
client ----------------> server
       <----------------
          response(HTML): SSN, TSL 등 공개키를 사용한 암호화되어 전송
               |
        데이터를 가로채는 경우 감소

2)Status Codes

- 서버가 클라이언트가 요청한 처리상태를 숫자(3자리숫자, 5개범위)로 전송하는 코드
  1xx: Information
  100(continue)- 요청이 정상적이며,계속 진행 가능
  102(Processing) - 요청한 것을 아직 처리 중

2xx: Redirection
200(ok) - 성공 메세지
201(created) - 클라이언트가 요청한 리소스 생성이 성공함
204(no content) - 클라이언트 요청 처리 완료 전송할 컨텐츠는 없음

3xx: Redirection
301(Moved Permanently) - 요청한 페이지가 영구적으로 다른곳으로 이동
302(Found) - 요청한 페이지가 임시적으로 다른 곳으로 이동
303(See Other) - 302와 동일한 의미 , 단 Get 방식만 사용가능

4xx:Client error
400(Bad Request) - 요청한 쿼리가 잘못된 경우  
 http://www.naver.com/login.jsp?id=test
401(Unauthorized) - 로그인 등 권한이 없는 클라이언트가 요청한 경우
403(Forbidden) - 로그인한 사용자이지만 특정한 일을 수행할 권한이 없는 클라이언트
404(Not Found) - URL이 존재하지 않을 때
405(Method Not Allowed) - 요청한 기능이 허용되지 않을때

5xx: Server error
500(Internal Server Error) - 서버에서 요청을 처리할 수 없는 경우 전송  
 502(Bad Gateway) - 중간에 서버 요청을 어떻게 처리해야 할지 모르는 경우 전송
503(Service Unavailable) - URL에서 요청한 특정한 처리상태를 하기 위한 준비가 아직 안되었을때

3)Request

- URL : Uniform Resource Location
  https://www.server.com:80/courser/frontend/js/search?a=123

---

프로토콜(protocol) 호스트네임(hostname) pathname 쿼리(query -string)
80은 생략가능

- Method : 요청하는 방식(GET/POST/PUT/...)
  MDN - https://developer.mozilla.org/ko/docs/Web/HTTP/Methods
  GET - get : 서버에서 해당 리소스를 가져오고 싶을 떄
  POST - created : URL이 가리키는 곳에 무엇인가를 생성하고 싶을때,
  전송하는 데이터의 용량이 큰 경우..
  PUT - replace : URL에 있는 데이터를 업데이트 하고 싶을떄
  DELETE - delete : URL에 있는 데이터를 삭제하고 싶을 떄
  PATCH - replace partially : 부분적으로 업데이트 하고 싶을 떄
  HEAD - get without body : 데이터를 받지는 않고 HEAD만 받고 싶을때
  OPTIONS - all supported methods for URL
  : 해당 URL에서 사용 가능한 모든 메소드 정보를 옵션을 알고 싶을 때
  TRACE - echoes the received request
  : 요청에 대한 서버의 반응 상태를 확인할 떄

[GET] - 200, 401, 403, 404, 405 ..
[POST] - 201, 40414, 403, 404, 409..
[PUT/DELETE/PATCH] - 200, 204, 404, 405 ..
[ HEAD/OPTIONS/TRACE] - 200, 401, 403, 404, 405 ..

- GET/HEAD/OPTIONS/TRACE 메소드는 서버의 데이터를 읽기만 진행하고,
  PUT/DELETE/PATCH 데이터의 변경을 요청하는 메소드

4. HTTP Headers
   -Stateless Protocol : HTTP는 상태정보를 저장하지 않는
   프로토콜이므로 서버에 대한 인증을 필요시 얻어야함
   -Cookies & Session
   |------> 브라우저
