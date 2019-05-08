// XML
// key,value 형태로 데이터를 표현하는 document
// html에서의 태그에 key 이 들어감

// XMLHttpRequest(XHR) :  XML을 받아오는 HttpRequest

// fetch()
// fetch()를 사용하여 XHR과 유사하게 만들어보자
// return 값 : Promise

// 무엇이 실행될지 (알려주는 )callback을 받지 않는다.
// 눈에 보이게 하기 위해 Promise(/reject)를 return으로 받는다.


const URL = "https://jsonplaceholder.typicode.com/posts"

// 요청 보내기

// const res = fetch(URL) // pending : 끝나지 않음
// console.log(res) // Promise
/*
const res = fetch(URL).then(function(response){
    // console.log(response) // Response
    // console.log(response.headers)
    // console.log(response.body)
    // console.log(response.status)

    return response.json() // object로 만들어줌

})

console.log(res) // Promise
res.then(function(obj){
    console.log(obj)
})


*/


/*
const myFunc = function(input){
    return input
}

아래와 같이 수정할 수 있다.
const myFunc = input => input
*/

/*
const res = fetch(URL).then(response => response.json())

const temp = res.then(obj => obj)
*/

// 더 줄이기

const res = fetch(URL).then(response => response.json()).then(obj => obj)

console.log(res)