// 6.arrow-function.js

function sum(a, b){
    return a + b
}

// lambda 익명함수
// 함수의 이름은 없고 변수에 할당하였다.
const sum2 = function (a, b) {
    this // 실행 시점의 객체를 바라보게 됨
    return a + b
}

typeof sum // function
typeof sum2 // function

const sum3 = (a, b) => {
    this // 선언 시점의 객체를 바라보게 됨
    return a + b
}

const sum4 = (a, b) => a + b

console.log(sum2(1, 2)) // 3
console.log(sum3(1, 2)) // 3
console.log(sum4(1, 2)) // 3
