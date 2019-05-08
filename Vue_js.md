# Vue.js

* Javascript는 imperative(명령/해야하는)/declarative(what, 선언적)하게 짜져 있다. 

  * 컴퓨터로 날리는 명령은 대부분 declarative하다.

  ex) put egg in bowl => 컴퓨터는 껍질을 까지 않고 달걀은 그릇에 넣는 행동만 진행한다.

  ​	=> 순서, 절차적인 명령을 다 내려야 한다.

  => vue.js를 통해서 우리가 주문하듯이 무엇을 할지만 고민하도록 해준다.

* SPA(Single Page App, 구성)
  * React (자유도(사용자 정의) 높음-sample코드 찾기 어려움)
  * Angular (자유도 낮음-언어가 정해놓은 법칙이 있음)
  * Vue (Angular보다 자유도 높음, 가장 가벼움): Angular을 만들다가 나온것 
* CRUD를 만들기 위해서는 최소 3개(D 빼고)의 페이지가 있어야 하지만 SPA중에 하나를 사용하면 Single page로 만들 수 있다.



* 참고 
  * zzu.li/jsscript
    *  로드하는데 생각보다 오랜 시간이 걸림(위에서부터 순차적으로 읽기 때문에)
  * `<script></script>`를 `<title></title>`위에 쓰는 이유
    * 순차적으로 실행하기 때문에 `<title></title>`아래에 있으면 타이틀이 먼저 실행된 후에 script가 실행된다.
  * vue.js devtools





구글에 vue.js 검색하여 '시작하기' 들어가기 (<https://kr.vuejs.org/> 문서참고) 

사용하기 위한 버전이 2개 있음

* 개발버전

  * 개발할 때 사용 
  * 개발자가 읽기 쉽도록 .js로 만들어져 있음

  ```html
  <!-- 도움되는 콘솔 경고를 포함한 개발 버전 -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

* 배포버전

  * 배포할 때 사용
  * 개발자가 읽기 어려움
  * uglied 

  ```html
  <!-- 상용버전, 속도와 용량이 최적화됨. -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  ```







* browser console에서

  ```
  app.$요소
  ```

  위와같이 입력했을 때 출력

  * 메서드는 `$`를 사용하지 않고 바로 입력 가능 ( 괄호붙이기!!)
    * 바로 입력하면 위의 document창에 바로 함수실행됨(출력값은 undefiend)

