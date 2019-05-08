// 5.const-let.js

// let => 재할당이 가능한, 변경 가능한 상수
// const => 재할당이 불가능한, 변경 불가능한 상수


let count = 0;
count = count + 1

let flag = true
flag = !flag

const name = 'jcm'
// name = 'jj' // typeError
const getMinFromArray = (numbers) => {
    // 
}
// 대부분 const로 선언하고
// 변경해야 할 값이 들어가는 변수만 let을 사용한다.


// 스코프 : 해당 변수가 접근할 수 있는 유효 구간

// let, const => 블럭단위 스코프 => 선언된 블럭안에서만(선언된 블럭의 하위 스코프까지) 사용할 수 있다.
// 상위 스코프에서 선언되었기 때문에 하위 스코프에서 사용할 수 있다.
function test(){
    let message = '안녕하세요'
if (true){
    console.log(message)
}
}

// 하위 스코프에서 선언되었기 때문에 상위 스코프에서 정의되지 않은 변수로 사용하지 못하여 에러가 발생한다.
function test1(){
    if (true){
        let message = '안녕하세요'
    }
    console.log(message)
}

// 상위 스코프에서 선언되었기 때문에 하위 스코프에서 사용할 수 있다.
function test(){
    const message = '안녕하세요'
if (true){
    console.log(message)
}
}

// 하위 스코프에서 선언되었기 때문에 상위 스코프에서 정의되지 않은 변수로 사용하지 못하여 에러가 발생한다.
function test1(){
    if (true){
        const message = '안녕하세요'
    }
    console.log(message)
}



// var => 함수단위 스코프 => 함수 내에서 어느위치에서든 선언되었다면 함수 안에서 어느 위치에서든지 사용할 수 있다.
        // 아래 두 경우 모두 가능
function test(){
    var message = '안녕하세요'
if (true){
    console.log(message)
}
}

function test1(){
    if (true){
        var message = '안녕하세요'
    }
    console.log(message)
}







