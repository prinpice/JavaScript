    // def sum(a, b):
    //     return a + b

    // 1. function 키워드를 통해 함수를 정의
    function sum1(a, b){
        return a + b
    }
    // 읽는 시점에서 hoisting을 통해 변수를 정의하듯이 빈 함수를 정의함
    // 익명함수를 사용하면 hoisting을 막아준다.
    // => 익명함수 선호함

    // 2. 익명함수를 선언 => 변수에 할당 (중요) // 함수 표현식
    let sum2 = function(a, b) {
        return a + b
    }
    // 이름이 없어서 이후에 찾아서 사용하기 힘듬
    // 함수에 이름을 붙여줘서 사용

    // sum => "function" => sum()


    // => : function
    // 3. ES6 Arrow Function
    let sum3 = (a, b) => {
        return a + b
    }
    // return문(함수 내부 코드)이 한줄일 경우
    let sum4 = (a, b) => a + b
    
    //더 줄이기
    // 예시) materials.map(material => material.length)

    //함수안의 함수를 전달하는 형태가 많이 사용됨


    let menu = ["짜장면", "짬뽕", "쌈밥", "김밥"]

    // for  food in menu:
    //     print(food)


    // 1. for 문을 통해 배열을 순회
    for (let i = 0; i < menu.length; i++){
        console.log(menu[i])
    }


    // 2. forEach() 메서드를 통해 순회
    // menu.forEach(함수)
    // map(lambda x:x**2)
    menu.forEach(function(food){console.log(food)})
    menu.forEach((food) =>{console.log(food)})
    menu.forEach(food =>{console.log(food)})
    // 받아온 데이터가 대부분 array로 구성되어 있다.

    // 참고 : vue에서는 this를 사용하기 위해서 arrow function을 사용하지 않는다.