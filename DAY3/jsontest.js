// axios (javascript version of python requests)
// request가 포장해 주는 것처럼 만듬


console.log(document) // ??

const URL = "https://jsonplaceholder.typicode.com/posts"



// XMLHttpRequest() : 실시간으로 업데이트해서 요청을 보내줌

const XHR = new XMLHttpRequest()

// CREATE 

/*
//GET
// XHR.open(어떤 HTTP 메소드를 쓸지, URL)
// XHR.open('GET', URL + "posts")
XHR.open('GET', URL)

// 실제 요청 보냄 => 응답 받을때까지 기다림
XHR.send()

XHR.addEventListener('load', function(e){
    // load가 된 건은 행위를 한 것
    const result = e.target.response
    console.log(result)
    // JSON(string) => javascript object 변환
    const jsObject = JSON.parse(result) //조작할 수 있도록 object로 변환
    console.log(jsObject)
    console.log(jsObject.title)
    // javascript object => JSON(string) 변환
    // const jsonString = JSON.stringify(jsObject)
    // console.log(jsonString)
    
})

// browser에서 실행해보자


// 1. JSON : string (js object 형태와 유사한) (조작X)
//      -> object로 변환 (JSON.parse()) (조작O)
// 2. Javascript Object : object (조작O)
//      -> JSON 파일(string) (JSON.stringify()) (조작X)


// 변환하는 이유 : 요청을 보낼때는 object로 보낼 수 없다.
// 주고받을 때 :  string(text)
// 조작할 때 : object

*/

// POST로 글 작성해보자

XHR.open('POST', URL)

// 어떤 데이터를 보내는지 알려줘야 한다.
XHR.setRequestHeader(
    // content-type이 어떤 것인지 보내줌(decode)
    // key : 
    'Content-Type',
    // value : 
    'application/json;charset=UTF-8'
)


// string으로 만들면 귀찮기 때문에 object로 만들어서 string화 하여 보내기
// const data = '{"userId":1, ...}' 귀찮음 => object처럼 만들기
const data = {
    userId: 1,
    title: "제목이다",
    body: "ㅈㄱㄴ"
}

// XHR.send(보내고자 하는 데이터)
XHR.send(JSON.stringify(data))

XHR.addEventListener('load', function(e){
    const result = e.target.response
    console.log(e)
})



// UPDATE

// PUT (& PATCH)
// PATCH : 내용 수정때 사용하지만 거의 사용하지 않음

//미완성.....
XHR.open('PUT', URL+"/1")

const updatedata = {
    userId: 1,
    title: "제목을 수정하자",
    body: "수정확인하자",
    id: 101
}

XHR.send(JSON.stringify(updatedata))
XHR.addEventListener('load', function(e){
    const updateresult = e.target.response
    console.log(e)
})



// DELETE