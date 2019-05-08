// 1.callback.js

// 손님이 카페에와서 커피를 주문함

// 커피를 주문하고 만들고 받는 함수
const orderCoffee = (order) => {
    // 종업원이 주문을 받고 커피를 만들기 시작함
    let coffee

    // 커피만드는 시간 1초
    setTimeout(() => {
        // 1초 후에 손님이 주문한 커피가 담김
        coffee = order
    }, 1000);

    // 주문한 손님에게 커피를 줌
    return coffee

}

// 커피를 주문해보자

const coffee = orderCoffee('아아') // 커피를 주문하고 컵에 담겨서 나왔다.
console.log(coffee) 
// 예상 및 원하는 답 : 아아 // 나온 커피는 : undefined

// setTimeout은 nonblocking함수이기 때문에 return이 바로 실행된다.
// 컵은 미리 주고 그 후에 커피를 만듬....


const orderCoffee = (order, callback) => {
    // 종업원이 주문을 받고 커피를 만들기 시작함
    let coffee

    // 커피만드는 시간 1초
    setTimeout(() => {
        // 1초 후에 손님이 주문한 커피가 담김
        coffee = order
        callback(coffee) // 커피를 다 만들고 컵에 담은 후에 주문한 손님에게 줘라
    }, 1000);

}

const coffee = orderCoffee('아아', (coffee)=> { // 커피를 다 만들고 이 함수를 실행시켜라
    console.log(coffee) // 다 만든 커피를 컵에 받아서 확인하자 // 아아
})