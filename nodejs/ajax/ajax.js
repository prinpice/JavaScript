// AJAX

// 참고 koreanjson.com

// 페이지가 reload되지 않아도 요청이 들어온 내용을 처리해줌(내용이 바뀜)

// XMLHttpRequest // class // 외부 네트워크 리소스를 불러오는 객체
// 다른 객체(문서등)에서 JSON으로 되어있는 내용만 가져오기
const XHR = new XMLHttpRequest() // browser에서 제공하는 WEB API 중 하나(browser에서만 가능, node에서 사용불가능)

const URL = 'https://koreanjson.com/posts/1' //  요청보낼 URL

XHR.open('GET', URL) // GET방식으로 요청보낼곳
XHR.send() // 요청 보냄

// 응답이 왔을 때 이 함수를 실행해라
XHR.addEventListener('load', (event) => {
    const rawData = event.target.response // string
    const parsedData = JSON.parse(rawData) // String = > Object
    console.log(parsedData) 
    // console.log(event.target.response) // string
    // JSON.parse(event.target.response) // String = > Object
    // JSON.stringify() // Object => String

})


// ctrl + l : clear
// browser에서 반드시 새로고침을 해주어야 기존 정의된 const변수가 사라진다.

