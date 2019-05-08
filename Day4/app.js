function shinun(){
    setTimeout(() => {
        console.log("쉬는시간이에용") // shinun함수 밖에 있으면 바로 실행 됨
    }, 5000)
    return "이건 리턴이지"
}
// nonblocking함수
// - '실행될 때 알려줘' 하고 다른곳(backoffice)에 넘기고 다음을 실행한다.
// - return값도 먼저 실행한다. => 위의 shinun()과 같이 return을 하면 안된다.



console.log("쉬는시간 3초전") 
const ret = shinun()
console.log(ret)
console.log("쉬는시간 다됨")
/* 
쉬는시간 3초전
이건 리턴이지
쉬는시간 다됨
(5초 뒤에)
쉬는시간이에용
*/

// JavaScript는 (서버엔진)nginX의 사용방법과 유사

// 이런 식으로 setTumeout함수가 구성되어 있을 것
// function setTimeout(func, time){
//     // 시간을 체크해서 time만큼의 시간이 흐른 뒤,
//     func()
// }

// => 함수 안에 함수 안에 함수를 넣어서 사용하는 방법을 사용

// readFile() // async(비동기적) nonblocking 함수 - 파일을 불러오는 것은 오랜 시간이 걸림
// 어떤식으로 동작하는지 확인해보기
const readFile = () => {
    let content
    // 파일을 읽어오는데 100ms 소요
    setTimeout(() => {
        content = "Hello World"
    }, 100)
    return content
}

let fileContent = readFile() // (파일을 읽은 후에 실행할 내용)
console.log(fileContent) // undifined // content = "Hellow World"가 실행되기 전에 return content가 먼저 실행되기 때문에 정의되지 않은 변수를 출력한다.
                                        // 순차적으로 출력하려면 실행하려는 함수 안에 작성해줘야 한다. => callbackfn
// readFile함수의 대략구성
// const readFile = (myFunc) => {
//     let content
//     // 파일을 읽어오는데 100ms 소요
//     setTimeout(() => {
//         content = "Hello World"
//         myFunc(content) // setTimeout이 실행되고 나서 실행하도록 함
//     }, 100)
//     return content
// }
                           
// const log = () => {
//     console.log(content)
// }

// log() // console을 포함시키고 있음

// readFile(log)

// 사용자가 nonblocking함수를 만들 수는 없다. systemDefine
// 기존의 unblocking 함수를 여러개 사용하여 만들수는 있다.
// 사용자는 만들어진 context만 제거 가능하다.





// func1(func2(){}){} // func1 실행 후에 func2가 실행되기 위해서는 함수안에 함수를 넣어야 한다.

// callback함수 : 순차적으로 실행되지 않는 함수를 순차적으로 실행하고 싶을 때 사용