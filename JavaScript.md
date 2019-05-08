# JavaScript

* 목적

  * http request : 요청을 해서 응답을 받아야 하는 protocol (반복하여 load해야 한다.)
  * 페이지를 로드하지 않고 바로 실행할 수 있도록 보이게 하는 언어
  * **Browser를 조작할 수 있게 하기 위해 만든 언어**
    * html파일을 작동시킨다.
  *  Seamless한 Integration : 매끄러운 유저경험을 만들어주는 서비스

* Document

  * **MDN web docs**
  * js는 공식문서가 없다.
    * 다른 언어들은 관리하는 주체가 있다.
    * js를 만든 곳 : Netscape Browser(10년전 ex와 같은 위치)
    * 1차 brower 전쟁
      * Nescape에서 유료배포
      * os 권력을 가진 MS에서 Ex를 만들어서 무료로 배포
      * MS가 독점함(암흑기)
    * Netscape의 구조등을 Firefox에서 상속받음
  * 특정 언어를 사용하지 않는다.
  * 표준화되어있지 않다.

* 회사마다 컴파일러(실행시키는 것)가 다름

  * Google: Chrome V8엔진(컴파일러) - 가장 안정적(나름 표준)
  * Firefox: Spider Monkey엔진
  * Apple: Safari JavaScriptCore
  * MS: Chakra
  * 점유율
    * <https://www.koreahtml5.kr/front/stats/browser/browserUseStats.do>

* ECMA

* 인터넷에서 ctrl + shift + j를 통해 창을 켜서 바로 사용 가능

  * 단점: space기능등 불편한 점이 많다.

* 매우 객체적으로 이루어져 있다.

* VScode에서 사용하기 위한 기본설정조건

  * Extensions(설치하기)
    * Live Server: 새로고침 대신해주는 기능
    * JavaScript (ES6) code snippets
    * Bracket Pair Colorizer : 괄호쌍 구별해주는 기능
  * liveserver일 때 하단에 `port:5500`이 쓰여져 있는데 클릭하면 server멈춤

* ES6(ECMAScript, ECMAScript 2015, Javascript Harmony) 이후로 프로그래밍 언어라고 불릴 수 있을 정도로 체계적이되고 인기 많아짐

* 기능

  * shift + enter : browser에서 줄바꿈
  * `window`로 시작
  * Browser, BOM(Brower Object Model) 조작
    * `window.print()` : 인쇄
    * `window.innerWidth`: 현제 브라우저의 width를 알려준다.
  * HTML, DOM(Document Object Model) 조작
    * `window.document.title`: html파일의 header부분의 title내용을 보여준다.
    * `window.document.title = "하이하이"`: title내용을 수정할 수 있다.
  * 다른 언어처럼 계산기 로직 사용 가능
    * `200 + 300` => `500`
  * 변수, 조건문 생성 가능
    * `age = 30`  `if (age > 20) {alert('아재네')}`

* 로컬에서 돌릴 환경설정

  * vs code 사용
  * JAVASCRIPT 폴더

* html파일

  * `<script></script>`태그 안에 작성한다.

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  <body>
      
  <script>
  alert('이제 JS 공부 시작!')
  </script>
  
  
  </body>
  </html>
  ```

* `alert()` : 알람 띄워줌

* `console.log()`: 화면에는 보이지 않지만 콘솔창에 log(프린트)되어 있음

* oneline comment : //

* multiline comment : /**/

* `document` : 현재 html을 뜻한다.(브라우저가 조작하는 document)

  * `document.write()`: 입력된 텍스트를 해당 document페이지에 출력해준다. (줄바꿈X)

    ```javascript
    document.write('아무말')
    document.write('아무말')
    
    => 아무말아무말
    ```

  * write내부에 태그를 넣으면 적용이 된다.

    ```javascript
    document.write('<h1>아무말</h1>')
    document.write('<p>아무말</p>')
    ```

  * `document.querySelector('태그의 이름')` 지정된 태그를 가진 쿼리를 찾아준다.

    ```javascript
    document.write('<p>아무말</p>')
    
    ptag = document.querySelector('p')
    console.log(ptag)
    
    // => console창에 
    <p>아무말</p>
    //이 출력된다.
    ```

    `document.querySelector('p').innerText = "change text"`: p 태그의 내부에 작성된 텍스트를 입력한 텍스트로 바꿔준다.

    ```javascript
    방법 1
    ptag = document.querySelector('p')
    ptag.innerText = "하하하"
    
    방법 2
    document.querySelector('p').innerText = "몰랑몰랑"
    ```

    

* 참고 

  * 컴퓨터 언어가 되기 위한 조건
    1. 저장
       1. What(Data Type)
          * 변수
          * 리스트
          * 딕셔너리
          * ...
       2. Where
       3. How
    2. 조작
       1. 조건
       2. 반복



* js code를 파일을 따로 만들어 관리한다.

  ```html
  <script src="파일위치+ 파일명"></script>
  
  <!-- 동일폴더내에 있을 때 -->
  <script src="basic.js"></script> 
  ```

  





### Data Type

#### 원시자료형(Primitive)

* immutable

1. string

2. number

3. boolean

4. null - type : object(하위호환을 위함. 타입 정의 전의 기존 코드들이 보존되도록 타입정의를 바꾸지 않는다. 즉 예전에는 따로 자료형이 없었다.)

5. undefined

6. (symbol)

   `console.log(typeof())`타입을 알아볼 수 있다.

#### 사용자 정의 자료형

* 원시를 제외한 모든 것이 객체
  * Object, Array, Function, Object : Object가 2번 반복된 것이 아니라 4개인 것이다- 전부 객체이기 때문이다.
* mutable

1. Array

2. Function

3. Object

4. ...

      

### Variable

* `var`

  * variable의 약자로 기존에 사용하던 변수 : 현재 거의 쓰이지 않음

  * functional scope

  * 거의 사용하지 않는 이유

    ```javascript
    for (var i = 0; i < 10; i++){
        console.log(i)
    }
    
    console.log(i)
    
    for문 종료후에 i를 출력하면 10을 출력한다. 즉, 반복문을 끝내고 싶지만 바깥에도 그대로 적용되어 버린다.
    ```

* `const` 

  * 다시 설정이 필요하지 않을 때 사용하는 변수  - 상수와 같은 느낌
  * block scope

  ```javascript
  const name = "aa"
  name = "bb"
  
  Uncaught TypeError: Assignment to constant variable at <anonymous>:1:6
  ```

  ```javascript
  for (const z = 0; z < 10; z++){
      console.log(z)
  }
  
  변수 z가 바뀌지 않기 때문에for문이 실행되지 않는다.
  Uncaught TypeError: Assignment to constant variable at <anonymous>:1:29
  ```

* `let` 

  * 다시 설정이 필요할 때 사용하는 변수 - 변수 느낌
  * block scope

  ```javascript
  let age = 20
  age = 35
  ```

  ```javascript
  for (let j = 0; j < 10; j++){
      console.log(j)
  }
  console.log(j)
  
  for문 종료후에 j가 없어지기 때문에 에러가 발생한다.
  Uncaught ReferenceError: j is not defined at <anonymous>:1:13
  ```

=> `const`, `let` 두 변수를 주로 사용한다.



### Array

* 처음 지정

  ```javascript
  const names = ["john", "jcm", "ljs"]
  ```

* index를 사용하여 출력

  ```javascript
  names[1]
  
  "jcm"
  ```

* 길이 출력

  ```javascript
  names.length
  
  3
  ```

* 역순 정렬

  ```javascript
  names.reverse()
  ```

  **javascript는 destructed하기 때문에 원본을 훼손하며 사용한다.**

* 리스트 전체 출력하기

  ```javascript
  name
  
  reverse()를 실행한 다음일 경우
  ["ljs", "jcm", "john"]이 출력된다.
  ```

* 리스트에 append 하기

  ```javascript
  names.push('jik')
  
  
  결과는 names의 길이가 반환된다.
  ["ljs", "jcm", "john", "jik"]의 순으로 저장되어 있다.
  ```

* 리스트 마지막 원소 추출하여 출력(pop)

  ```javascript
  names.pop()
  
  "jik"
  ```

* 첫 번째 원소 추출

  ```javascript
  names.shift()
  
  "ljs"
  ```

* 첫번째에 원소 추가(앞에 추가)

  ```javascript
  names.unshift("ljs")
  
  결과는 리스트의 길이를 반환한다.
  ```

* 특정 원소가 포함되어 있는지 확인

  ```javascript
  names.includes("john")
  true
  names.includes("cc")
  false
  ```

* join하기

  ```javascript
  names.join("와 ")
  "ljs와 jcm와 john"
  ```

* 다양한 자료형을 한번에 입력 가능

  ```javascript
  ["john", 123, true, [1, 2, 3]]
  ```

  

### Object

* 복합 자료형을 저장하는 파이썬의 딕셔너리와 유사한 형태

  ```javascript
  const student = {'name':'john', 'age':20, 'isMale':true}
  undefined
  student.name // 클래스처럼 사용할 수 있다.
  "john"
  student['name']
  "john"
  
  const student2 = {name:'john', age:20, isMale:true}
  undefined
  student2.name
  "john"
  student2['name'] // string으로 키를 선언하지 않았지만 string처럼 사용할 수 있다.
  "john"
  ```

  * 앞에서 const로 변수 선언하여 작성한 경우 다음에 다시 선언할 수 없다.
  
* 

  ```javascript
  const me = {
  	name: 'john',
      phone_number: '0123456789',
      appleProducts:{
          iPad: '2018pro',
          iPhone: '6s+',
          macBoor: '2018pro',
      }
  }
  undefined
  me['name']
  "john"
  me.appleProducts
  {iPad: "2018pro", iPhone: "6s+", macBoor: "2018pro"}
  me.appleProducts['iPad']
  "2018pro"
  me.address = "강남구";
  "강남구"
  me
  {name: "john", phone_number: "0123456789", appleProducts: {…}, address: "강남구"}
  me.appleProducts.iMac = "2018pro"
  "2018pro"
  console.log(me);
  ```

  





* 반복문

  * while

    * 무한루프가 돌 경우 browser에서 아무것도 하지 못한다. browser 자체를 없애야 한다.
    * single thread로 돌기 때문이다.
    * asinc(비동기적 일처리)를 하는 이유이다.
    * 증감문을 반드시 작성해야 한다.

    ```javascript
    let i = 0;
    0
    while (i < 10) { //반복문은 10번 돌아감
        console.log(i)
        i++
    }
    ```
    
  * for
  
    ```javascript
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
    ```

* 조건문

  * if

    ```javascript
    let age = 26
    
    if (age > 30){
        console.log('아재네');
    } else if (age > 20) {
        console.log('아직이네');
    } else if (age > 10) {
        console.log('급식이네');
    } else {
        console.log('학식이네');
    }
    ```

### Function

- python과 같은 부분(1급객체)

- javascript에서는 변수명에 함수를 넣어서 사용하는 것을 선호한다.

- `=>` : function을 뜻한다.

- CamelCase로 대부분 사용한다.

  ```javascript
  const helloworld = function(){
      return "hello world"
  }
  undefined
  helloworld
  ƒ (){
      return "hello world"
  }
  typeof helloworld
  "function"
  hello2 = helloworld
  ƒ (){
      return "hello world"
  }
  hello2()
  "hello world"
  ```

  ```javascript
  function hello(){
      console.log("hello");
  }
  undefined
  
  hello()
  hello
  undefined
  function hello(){
      return "hello"
  }
  undefined
  hello()
  "hello"
  ```

  * return 값이 한줄 일 경우 세미콜론(;)을 사용하지 않는다.

* 익명함수

  * 특정 변수에 원하는 함수를 만들어 넣어서 사용한다.

    ```javascript
    const sum = function(a, b){
        return a + b
    }
    undefined
    sum(3, 5)
    8
    
    function sum1(a, b){
        return a + b
    }
    undefined
    sum1(3, 5)
    8
    ```

* 함수정의방법

  * python의 아래함수를 정의해보자

    ```python
    def sum(a, b):
        return a + b
    ```

  1. function 키워드를 통해 함수를 정의

     * 단점 : 읽는 시점에서 hoisting을 통해 변수를 정의하듯이 빈 함수를 정의함

       => 익명함수를 사용하면 hoisting을 막아줌

     ```javascript
     function sum1(a, b){
             return a + b
         }
     ```

  2. 익명함수를 선언 => 변수에 할당 (중요, 가장많이 사용)

     * 단점 : 이름이 없어서 이후에 찾아서 사용하기 힘듬

       => 함수에 이름을 붙여줘서 사용

     ```javascript
     let sum2 = function(a, b) {
             return a + b
         }
     ```

  3. ES6 Arrow Function

     * 함수안의 함수를 전달하는 형태가 많이 사용됨

     * ES6가 나온 후 부터 사용 가능해짐

     ```javascript
     let sum3 = (a, b) => {
             return a + b
         }
     ```

     * return문(함수 내부 코드)이 한줄일 경우

     ```javascript
     let sum4 = (a, b) => a + b
     ```

     * 더 줄일 수 있다(참고 예시)

     ```javascript
     materials.map(material => material.length)
     ```

     

### String

* single quoit와 double quoit의 기능은 같으나 구분해서 사용한다.

* 수술가능

  * Concatonation(합체)

    ```javascript
    let lastName = "kang"
    undefined
    lastName = "KIM"
    "KIM"
    let firstname = "younglim"
    undefined
    let fullName = firstname + lastName;
    undefined
    fullName
    "younglimKIM"
    ```

  * Interpolation

    ```javascript
    let intro = `안녕하세요 저는 ${firstname}입니다.`
    undefined
    console.log(intro)
    VM2185:1 안녕하세요 저는 younglim입니다.
    undefined
    ```

### Array Helper Method(Array를 활용한 Function)

* forEach, find, filter, reject, every, some ...

* 배열을 순회하는 방법

  ```python
  let menu = ["짜장면", "짬뽕", "쌈밥", "김밥"]
  ```

  * 아래 Python코드를 바꿔보자

    ```python
    for  food in menu:
        print(food)
    ```

  1. for 문을 통해 배열을 순회

     ```python
     for (let i = 0; i < menu.length; i++){
         console.log(menu[i])
     }
     ```

  2. `forEach()` 메서드를 통해 순회

     `menu.forEach(함수)`: 함수 위치에 보통 익명함수를 사용한다.

     ```python
     # 기본 익명함수 사용
     menu.forEach(function(food){console.log(food)})
     # food는 menu의 원소를 저장한 변수이다.
     # function() 괄호 안에 변수이름을 넣어주면 된다.
     # 1단계 줄이기
     menu.forEach((food) =>{console.log(food)})
     # 2단계 줄이기
menu.forEach(food =>{console.log(food)})
     ```
     
     

* 자료를 받아올 경우 대부분 `Array`로 구성되어 있다.

  ```javascript
  const posts = [
      {id: 1, title: "안녕"},
      {id: 2, title: "자바스크립트"},
      {id: 3, title: "브라우저 조작"},
  ]
  ```

  * JavaScript에서도 trelling comma가 허용된다.

  * forEach를 통해 순회를 하여 id가 2번인 post의 title을 찾으세요.

    * python코드로 먼저 짜보자

      ```python
      for post in posts:
          if post['id'] == 2:
              print(post['title'])
      ```

    * JavaScript로 수정해보자

      ```javascript
      posts.forEach(function(post){
          if (post.id == 2){
              console.log(post.title)
          }
      })
      ```

    * 줄여보기

      ```javascript
      posts.forEach(post => {if(post.id==2){console.log(post.title)}})
      ```

* 예시

  ```javascript
  const images = [
      {height: 10, width: 30},
      {height: 20, width: 90},
      {height: 50, width: 40},
  
  ]
  
  // images에 들어가 있는 이미지들의 넓이를 구해 area에 넣으세요
  const area = []
  images.forEach(image => {area.push(image.height*image.width)})
  ```

* `map()`

  * `for`와 유사한 기능을 한다.

  * 각각의 요소들을 함수를 통해 출력된 결과를 저장하여 반환한다.

  * `numbers.map(함수)`

  * **참고

    * fn  : function

  ```python
  # python의 map
  map(lambda x : x**2, numbers)
  ```

  ```javascript
  numbers.map(function(){
      // map 메소드에는 무조건 return이 있어야 한다.
  })
  ```

  * squaredNumbers에는 numbers의 요소들을 제곱을 한 숫자들의 배열로 만들어보자

    ```javascript
    const numbers = [1, 2, 3, 4, 5, 6]
    let squaredNumbers = []
    
    // 1
    numbers.map((number)=>{
        squaredNumbers.push(number**2)
        return
    })
    
    // 2
    squaredNumbers = numbers.map((number)=>{
        return number * number
    })
    
    // 3
    numbers.map((number)=>{return squaredNumbers.push(number**2)})
    console.log(squaredNumbers)
    ```

* `find`

  ```javascript
  let users = [
      {id: 1, username: 'tony'},
      {id: 2, username: 'steve'},
      {id: 3, username: 'thor'},
      {id: 4, username: 'tony'},
  ]
  ```

  * 조건식에 해당하는 값을 찾아준다.

  ```javascript
  users.find(function(user){
      // return (조건식)
  })
  ```

  * username이 'tony'인 사람을 찾는 코드를 작성해보자

  ```javascript
  const tony = users.find(function(user){
      // return user.id === 2
      return user.username === 'tony' 
  })
  
  console.log(tony)
  ```

  * `find`는 조건식에 해당하는 값이 여러개일 경우 첫 번째 값만 출력한다.

    => 조건식에 해당하는 모든 값을 출력하기 위해서 filter를 사용한다.

* `filter`

  ```javascript
  let users = [
      {id: 1, username: 'tony'},
      {id: 2, username: 'steve'},
      {id: 3, username: 'thor'},
      {id: 4, username: 'tony'},
  ]
  ```

  * 조건식에 해당하는 모든 값을 찾아준다.

  ```javascript
  const tonys = users.filter(function(user){
      return user.username === 'tony'
  })
  
  
  console.log(tonys)
  ```

* `reject`

  * 해당하는 조건이 아닌 요소들만 리턴하는 함수
  * 사용자 정의 함수(직접 만들어야 함)

  ```javascript
  function reject(array, func){
      array.filter(function(array_element){
          return !func(array_element)
      })
  }
  ```

  * 예시

    ```javascript
    let users = [
        {id: 1, username: 'tony', isAdmin: true},
        {id: 2, username: 'steve', isAdmin: false},
        {id: 3, username: 'thor', isAdmin: false},
        {id: 4, username: 'tony', isAdmin: false},
    ]
    ```

    * 아래와 코드를 돌려보자

      ```javascript
      reject(user, function(user){
          return user.username === 'tony'
      })
      
      // => [{id: 2, username: 'steve'}, {id: 3, username: 'thor'},]
      ```

* `every`

  * array의 모든 요소가 조건에 맞을 때 true, 그렇지 않으면 false를 return한다.

  ```js
  let users = [
      {id: 1, username: 'tony', isAdmin: true},
      {id: 2, username: 'steve', isAdmin: false},
      {id: 3, username: 'thor', isAdmin: false},
      {id: 4, username: 'tony', isAdmin: false},
  ]
  ```

  ```js
  const every_tony = users.every(function(user){
      // return user.username === 'tony' // false
      return user.id < 5 // true
  })
  console.log(every_tony) 
  ```

  * 요소들 중 관리자가 있는지 확인해보자

    ```js
    const every_ad = users.every(function(user){
        return user.isAdmin === false
    })
    console.log(every_ad) // false => 관리자가 존재한다.
    ```

* `some`

  * array의 요소 중 하나 이상이 조건에 맞을 때 true, 그렇지 않으면 false를 return 한다.

  ```js
  const some_tony = users.some(function(user){
      // return user.id < 5 //true
      // return user.username === 'tony' // trues
      return user.isAdmin === true
  })
  console.log(some_tony)
  
  ```

  

​    

     ### Type Coercion

* 동일명 : implicit coercion, implicit type casting

* JavaScript는 매우 유연한 언어이다.

* 비교할 때 일어남(>, ==, < 등등)

* input받은 값이 비교값과 type이 다를경우 자체적으로 바꿔줌

  ```javascript
  // 아재 판독기
  // 좀 더 interactive하게 만들자
  const age = prompt("나이를 말해줘") // input
  
  // 만약 30 초과이면, => alert('아재네')
  // 20 초과이면, => 학식이네
  // 8 초과이면, => 급식이네
  // else => 이유식이네
  if(age>30){
      alert('아재네')
  } else if (age>20){
      alert('학식이네')
  } else if (age>10){
      alert('급식이네')
  } else {
      alert('이유식이네')
  }
  ```

  * age가 받은 input값은 string이지만 비교하는 값이 int이기에 int로 자체적으로 바꿔서 비교해준다.

* JS Comparison Table

  * <https://dorey.github.io/JavaScript-Equality-Table/>
  * **JavaScript의 비교에서 `==`는 매우 풀어주기 때문에 tight하게 사용하려면 `===`을 사용해야 한다.(위의 table 링크 참고)**

### Type

#### Primitive Type

- String / Number
  - ex) 사과가 있는 자리에 사과 대신 배가 들어감
  - property(값)이 바뀌면 type(전체)가 바뀌는 것

#### Reference Type

- Array / Object
  - ex) 바구니 안에 사과가 들어있는데 사과를 배로 바꿈, 같은바구니
  - property(내용)이 바뀌어도 type(전체)가 바뀌지 않는다.

​     

## Dino Game





















Lodash