// sleep()
// javascript에는 sleep함수가 없다.
// sleep 함수와 유사한 setTimeout()이 있다.
/*
function shinun(){
    // setTimeout(함수, 시간(ms단위))
    setTimeout(() => {}, 10000) // () => {} : 아무것도 없는 함수
    alert("쉬는 시간이에용")
}

console.log("쉬는시간 3초전")
shinun()
console.log("쉬는시간 다됨")

// 이렇게 구동하면 저장하는 순간 바로 작동됨
// => setTimeout을 활용하기 위해서는 함수 안에 alert를 넣어야 한다.
*/
/*
function shinun(){
    // setTimeout(함수, 시간(ms단위))
    setTimeout(() => {
        console.log("쉬는 시간이에용")
    }, 10000) // () => {} : 아무것도 없는 함수
    
}

console.log("쉬는시간 3초전")
shinun()
console.log("쉬는시간 다됨")
*/
// 결과
/*
쉬는시간 3초전
쉬는시간 다됨
쉬는 시간이에용
*/


// 이유?
// blocking하다 : 위의 실행문이 실행되지 않으면 아래 실행문이 실행되지 않는다.(순차적으로 실)
// python에서는 blocking이 되어 있어서 무조건 위에서 부터 순서대로 실행되지만
// javascript에는 blocking되는 것이 있고 unblocking되는 것이 있다.
// setTimeout이 nonblocking하기에 shinun()이 실행되고 있어도 대기를 하고 있으면 대기는 계속 하면서 다음내용도 실행된다.
// 여기서는 shinun()함수가 실행되고 있어서 출력은 10초 뒤이 되지만 대기를 하고 있어 다음 문장이 실행되기 때문에 결과가 다르게 나온다.

console.log(Date.now()) // 출력된 시간은 (linux standard time: UTC 기준시간) 1970-01-01 00:00:00부터 흘러온 시간

// sleep 함수 생성
function sleep(sec){
    let start = Date.now()
    while (Date.now() < start + sec*1000) {
        
    }
}

// single thread => 이 함수가 실행되는 동안 다른 작업을 할 수 없다.
function shinun(){
    sleep(5)
    console.log("쉬는 시간이에용")
}

console.log("쉬는시간 3초전")
shinun()
console.log("쉬는시간 다됨")


// browser는 single thread
// javascript는 browser를 조작하는 언어이다. 
// 한 명령을 끝날때까지 실행하면 모든것을 많이 차지하기에
// 다른 곳에 넣어놓고 다음 작업을 한다.
// unblocking : 대기가 많이 길 경우 해당 내용을 다른데 놓고 그 아래 명렁어를 자체적으로 실행한다.

// nonblocking(끝날때까지 기다리지 않음-다른것을 실행한다., 기존 실행되는 것은 다른데에서 계속 실행되고 있다.) <-> blocking(해당 실행되는 것이 끝날 때까지 다음 내용이 실행되지 않는다.)
// nonblocking : 다른데 놨다 다시 받아오는 느낌 (종업원이 한명인 음식점-한 종업원이 많은 일을 처리함(들어온 순서대로하지만 순서를 꼭 지키지 않음))


// asynchronous(비동기적) <-> synchronous(동기적 == 순서대로, != 동시적)
// javascript는 nonblocking, asynchronous하는 요소를 가지고 있다. (전부다는 아님)


// javascript는 blocking으로 짜면 browser를 다 막아버리기 때문에  inblocking을 선호한다. 


// xml event listener
