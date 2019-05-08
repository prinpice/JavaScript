# Rest API

## HTTP

* Http 기본 속성
* Stateless
  
  * client 상태나 server 상태가 기록되지 않아 request가 올 때마다 새로운 상태가 된다.
  
* Connectless
  
  * protocol 상에서 독자적인 request로 구성되어 있어서 실제 액션이 연결되어 있어도 서버상에서는 독자적으로 되어 있다.

* URL(Uniform Resource Locator)

  * 기존에는 요청 주소가 규칙이 없어서 매우 다양했었다.
  * 통합자 자원 지시자

  ```mermaid
  graph LR
  A[http://localhost:300/posts/3]
  B[Schema<br>http]---A
  C[Host<br>localhost]---A
  A --- D[Path<br>posts/3]
  E[https://search.naver.com/search.naver?query=gkdl] --- F[query<br>query=gkdl]
  ```

  (참고 : resource : 데이터(정보))

* Http 요청 메시지

  |                 구분                  |                             비고                             |
  | :-----------------------------------: | :----------------------------------------------------------: |
  |          시작줄(요청메시지)           |                         GET/posts/3                          |
  | 헤더(요청헤더, 일반헤더, 응답헤더 등) | User-Agent:Mozila/5.0 (Macintosh;..).. Firefox/51.-  <br>Accept: text/html, ... <br>Accept-Language: en-US, en; |
  |                 본문                  | POST 등 요청의 경우 본문의 내요이 포함될 수 있으며, 일반적으로 HTML 폼과 연계되어 사용됨 |

* HTTP 메서드(Verb)

  * CRUD를 이 메서드 안에서 사용한다.

  | 구분      | 비고                                                    |
  | --------- | ------------------------------------------------------- |
  | GET       | 지정 리소스의 표시를 요청하며, 오직 데이터를 받기만 함. |
  | POST      | 클라이언트 데이터를 서버로 보냄                         |
  | PUT/PATCH | 서버로 보낸 데이터를 저장/지정 리소스의 부분만을 수정   |
  | DELETE    | 지정 리소스를 삭제                                      |

=> REST API



## REST API

* URL의 패턴을 단순하게 만들어 사용하기 편리하게 만든것

* 구성

  * 자원(URI)
  * 행위(HTTP Verb)
  * 표현(Representationi)

* **REAT 중심 규칙**

  1. URI는 정보의 자원(특정 data road/record)을 표현해야 한다.

  2. 자원에 대한 행위는 HTTP Method로 표현한다.

     * HTTP Method를 Verb로 사용

       ```
       기존에
       GET으로 보낼 때
       GET/users/delete/1 => DELETE/users/1 
       
       POST로 보낼 때 
       posts/create => POST/posts
       ```

* URL 작성 TIP

  1. 기본
     * /는 계층 관계를 나타내는데 사용
     * 마지막에는 /를 포함하지 않음
     * URI에는 소문자를 사용
     * 파일 확장자는 포함시키지 않음
     * 밑줄 대신에 하이픈을 활용
  2. 리소스 관계를 표현하는 방법
     * `GET fifa.com/wordcup/teams/team/43822` 
  3. 리소스를 표현하는
     * `www.

* JSONplaceholder

  * <https://jsonplaceholder.typicode.com/>

* REST API 사용에 용이한 툴(API TEST할 수 있음)
  * <https://www.getpostman.com/>
  * 특정 데이터를 body 파트에서 넘길 수 있다.