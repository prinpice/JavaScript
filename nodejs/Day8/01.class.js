// 01.class.js

// 33-js-concepts (github)


// class는 OOP를 구현하기위한 것이다.
// JavaScript에는 class가 없다.
// class처럼 표현하기 위한 문법이다.
// 실제 객체이다.

// 자동차 만들 준비
/*
class Car{
    // constructor // 생성자 함수 // Car를 생성할 때 생성되는 구성요소들을 포함하고 있다.
    constructor(title) { // Car을 생성할 때 title을 생성한다.
        this.title = title // this : 지금 생성되는 클래스
    }

    drive() { // 함수 : 아무 키워드를 선언하지 않음
        return 'Vrooom'

    }

}

// class에서 새로운 instance를 생성할 때 new를 붙인다.
const car = new Car( 'A6' ) // A6라는 car를 생성
console.log(car.title) // A6
console.log(car.drive) // [Function: drive](실행을 안해서)
console.log(car.drive()) // Vrooom
console.log(typeof car) // Object
*/


// 상속

class Car{
    // constructor // 생성자 함수 // Car를 생성할 때 생성되는 구성요소들을 포함하고 있다.
    constructor(option) { // Car을 생성할 때 title을 생성한다.
        this.title = option.title // this : 지금 생성되는 클래스
    }

    drive() { // 함수 : 아무 키워드를 선언하지 않음
        return 'Vrooom'

    }

}


class Audi extends Car {
    constructor(option) { // option은 객체로 받는것
        super(option) // { title: 'A6', color: 'red' } // super : 내가 상속받은 부모클래스 // 상속받아옴 // 상속을 위해 변수를 똑같이 지정(option)해야 한다.
        this.color = option.color // 부모클래스에서 상속받은 option들을 부모한테도 넘겨주고 나도 받음
    }

    honk() {
        return 'Baaaaaaaam'
    }

    // overriding
    // 같은 함수지만 내용을 바꾸고 싶을 때 새로 생성 // 같은 이름으로 생성하면 하위클래스에서 먼저 찾아서 실행한다.
    drive() {
        return 'Vrooooooooooooooooooooooooooooooooooooooom'
    }

}


const audi = new Audi({ title: 'A8', color: 'black' })

// console.log는 인자를 무한대로 넘길 수 있다.
console.log(audi) // Audi { title: 'A8', color: 'black' }
console.log(audi.drive()) // Vrooom
console.log(audi.drive()) // Vrooooooooooooooooooooooooooooooooooooooom // overriding후
console.log('Before', audi.honk()) // Baaaaaaaam


// 클래스 밖에서도 함수 지정(수정) 가능 // honk함수의 property를 지정된 값으로 바뀐것
audi.honk = () => {
    return 'Bam'
}

console.log('After', audi.honk()) // Bam

Audi.prototype.color = 'white' // Audi로 생성하는 모든 객체의 color 값이 지정값으로 바뀜

// instanceof // 누구한테서 생성이 되었는지 알 수 있음
// 해당클래스에서 생성되었으면 true, 아니면 false
console.log(car instanceof Car) // true // car는 Car의 instance이기 때문
console.log(car instanceof Audi) // false // Audi가 Car를 상속 받았기 때문 


console.log(audi instanceof Car) // true // audi는 Car에서 파생된 Audi의 instance이기 때문
console.log(audi instanceof Audi) // true // audi는 Audi의 instance이기 때문




// Tip : drag후에 괄호시작 쓰면 괄호해줌
