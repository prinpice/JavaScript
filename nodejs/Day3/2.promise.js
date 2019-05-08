// 2.promise.js

// Promise // 약속대로 실행이 잘 되었으면 promise를 출력하고, 중간에 문제가 발생했으면 error를 출력
// .then() 메서드 : 성공시 결과를 넘겨줌(문제없이 처리가 잘 되었으면 then 함수를 통해 promise를 출력하고) // default return value : Promise()
// .catch() 메서드 : 실패시 결과를 넘겨줌(문제가 발생했다면 catch 함수를 통해 error를 출력함) 

//Javascript의 함수에는 항상 return값이 존재하는데 따로 정의해주지 않으면 return값은 undefined

new Promise() // 새로운 객체 생성
new Promise().then() // return값이 Promise()이기 때문에 아래와 같이 계속 then()을 사용할 수 있다.
new Promise().then().then().then() 
new Promise()
    .then()
    .then()
    .then() // callback함수 지옥...



// callback함수 대신 Promise를 사용해보자

// 손님이 주문을 하면 손님과 약속을 하겠다.
// 약속 : 커피를 다 만들고 나면 전해주고, 중간에 문제가 생기면 알려줄께
// Promise를 반환하는 객체(아무런 역할을 하지 않음)
const orderCoffee = (order) => new Promise( (resolve, reject) => { // resolve : 성공했을 때 .then()에서 넘겨줄 값(함수) // reject : 실패했을 때 .cathc()에서 넘겨줄 값(함수) // 변수이름은 상관없고 순서만 맞으면 된다.
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

// 주문을 해보자
orderCoffee('아메리카노') // Promise => 아메리카노
// [[PromiseStatus]]: "resolved" // 이 Promise는 현재 resolve가 되었고
// [[PromiseValue]]: "아메리카노" // "아메리카노" value가 담겨 있어서 꺼내 쓸 수 있다.

orderCoffee('아메리카노')
    .then(coffee => { // resolve된 매개변수를 받아서 함수에 사용 // coffee : 아메리카노
        console.log(coffee) // 아메리카노
    }) // Promise => undefined
// [[PromiseStatus]]: "resolved" // 이 Promise는 현재 resolve가 되었고
// [[PromiseValue]]: undefined // 더 이상 resolved 할 값이 없다.

// 참고
orderCoffee('아메리카노')
    .then(coffee => { // resolve된 매개변수를 받아서 함수에 사용 // coffee : 아메리카노
        console.log(coffee) // 아메리카노
    }) // Promise => undefined
    .then(value => {
        console.log(value) // undefined
    })
// => .then()은 Promise()를 반환한다.

orderCoffee()
    .then(coffee => { 
        console.log(coffee)
    }) // Promise => undefined
    .catch(error => {
        console.log(error) // 손님 주문 안하셨는데요??
    })

    orderCoffee('아메리카노') // Promise => 아메리카노
    .then(coffee => { 
        console.log(coffee) // 아메리카노
        return orderCoffee('라떼') // return을 해주어야 새로운 비동기 작업을 하겠다고 rechaining됨
    }) // Promise => 라떼
    .then(coffee => {
        console.log(coffee) // 라떼
    })
    .catch(error => { // 중간에 한번이라도 reject가 되면 바로 catch로 넘어와 실행이 된다. // 여기에서는 전부 resolve이기 때문에 실행되지 않는다.
        console.log(error) // 손님 주문 안하셨는데요?? // error객체를 handling함
    })

// PromiseStatus가 resolved이면 다음 then을 찾아서 실행되고 rejected이면 다음 catch를 찾아서 실행한다.
// 대부분의 비동기작업이 만들어져 있다.

// Promise를 return하는 함수
fetch() // JSON정보를 받아서 처리해주는 WEB API
fetch('https://koreanjson.com/posts/1')
    .then(response => response.json()) // 담겨있는 value 꺼내서 사용// serialize => JSON을 JavaScript object로 바꾸겠다. // .json()도 비동기적함수이다.(promise반환하는 함수)
    .then(post => console.log(post)) // 담겨있던 object 출력됨
    .catch(error => console.log(error)) // error가 발생할 수 있으므로 넣어준다.



// Promise의 단점
// 최종 목적지의 value를 꺼낼 때 함수를 한번 더 써야하므로 더 깊어진다.