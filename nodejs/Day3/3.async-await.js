// 3.async-await.js

// 손님이 원하는 것 // 가장 논리적이고 직관적
const coffee = orderCoffee('따아')
console.log(coffee)


const orderCoffee = (order) => new Promise( (resolve, reject) => {
    // 비동기적인 작업

    // 커피 주문이 제대로 들어왔는지 확인
    // order 가 제대로 들어왔는지 확인
    if (order === undefined) {
        // 실패했을 때
        reject('손님 주문 안하셨는데요;;;')
    }
    // 커피만드는 시간 1초
    setTimeout(() => {
        // 1초 후에 손님이 주문한 커피가 담김
        // 성공했을 때
        coffee = order
        resolve(coffee) // 커피가 정상적으로 완료됨   
    }, 1000);

}) 


const getCoffee = (order) => { // 원하는 로직을 함수 안에 넣어서 구현
    const coffee = orderCoffee(order)
    console.log(coffee)
} // but 처음과 별 반 차이 없음(비동기적.., .then()을 써줘야함)

getCoffee('따아')

// async-await
// 모든 응답받는 값을 쓰일 때 사용(매우 많이 사용됨)
// promise를 return하는 함수는 결과가 promise 객체 안에 담겨서 출력하기 때문에 .then()을 한번 더 실행해야 한다.
// await : 결과 값을 promise에서 꺼내서 바로 사용할 수 있도록 해줌
const getCoffee = async (order) => { // 내부적으로 비동기적 작업을 함 => 함수선언문 앞에 이 함수에는 비동기적 작업이 존재한다는 keyword인 async 를 넣어줌
    
    // 순차적으로 실행

    const coffee = await orderCoffee(order) // 비동기적으로 처리되는 Promise를 반환하는 함수 앞에 keyword인 await를 붙여줌 : 이 함수를 실행할 때까지 기다려!라는 명령어
    // await : resolve된 값을 const 값에 담는다.
    console.log(coffee) // order => 따아

    const coffee2 = await orderCoffee('아아')
    console.log(coffee2) // 아아

}

getCoffee('따아') // 출력되는 Promise는 여기서 반환하는 Promise이다. // return값이 없으므로 Value가 undefined되어 있다.


const getCoffee = async (order) => { // 내부적으로 비동기적 작업을 함 => 함수선언문 앞에 이 함수에는 비동기적 작업이 존재한다는 keyword인 async 를 넣어줌
    
    // error를 cover해줌
    try {
        const coffee = await orderCoffee(order) // 비동기적으로 처리되는 Promise를 반환하는 함수 앞에 keyword인 await를 붙여줌 : 이 함수를 실행할 때까지 기다려!라는 명령어
        // await : resolve된 값을 const 값에 담는다.
        console.log(coffee) // order => 따아

        const coffee2 = await orderCoffee('아아')
        console.log(coffee2) // 아아
    } catch (error) { // 손님 주문 안하셨는데요
        console.log(error)
    }
    

}


// async-await를 사용하여 출력해보기
// URL = https://koreanjson.com/posts/1
const URL = 'https://koreanjson.com/posts/1'

const getPost = async (URL) => {
    try{
        
        /*
        // 내가 작성한 코드
        const post = await fetch(URL)
        .then(response => response.json())
        console.log(post)  
        */

        /*
        // fetch(URL)에 반환되는 promise 안의 값을 꺼내는 방법 // 1. .then()  2. await
        const response = await fetch(URL) // promise return하는 비동기 함수
        // .json()에 반환되는 promise 안의 값을 꺼내는 방법 // 1. .then()  2. await
        const post = await response.json() // promise return하는 비동기 함수
        console.log(post)  
        */
               
        
    }catch(error) {
        console.log(error)
    }

}

getPost(URL)


