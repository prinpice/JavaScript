const posts = [
    {id: 1, title: "안녕"},
    {id: 2, title: "자바스크립트"},
    {id: 3, title: "브라우저 조작"},
]

// javascript도 trelling comma가 허용된다.

// forEach를 통해 순회를 하여 id가 2번인 post의 title을 찾으세요.
posts.forEach(post => {if(post.id==2){console.log(post.title)}})


// for post in posts:
//     if post['id'] == 2:
//         print(post['title'])


posts.forEach(function(post){
    if (post.id == 2){
        console.log(post.title)
    }
})

const images = [
    {height: 10, width: 30},
    {height: 20, width: 90},
    {height: 50, width: 40},

]

// images에 들어가 있는 이미지들의 넓이를 구해 area에 넣으세요
const area = []
images.forEach(image => {area.push(image.height*image.width)})

// python
// for image in images:
//     area.append(image['height']*image['width'])


const numbers = [1, 2, 3, 4, 5, 6]
let squaredNumbers = []

// squaredNumbers에는 numbers의 요소들을 제곱을 한 숫자들의 배열로 만든다.
// 1. for(){}

// 2. map()
// numbers.map((number)=>{
//     squaredNumbers.push(number**2)
//     return
// })
squaredNumbers = numbers.map((number)=>{
    return number * number
})

// numbers.map((number)=>{return squaredNumbers.push(number**2)})
console.log(squaredNumbers)



// python 
// map(lambda x : x**2, numbers)
// numbers.map(함수) // fn : fuction
// // map : 각각의 요소들을 함수를 통해 결과룰 저장해준다.
// numbers.map(function(){
//     // map 메소드에는 무조건 return이 있어야 한다.
// })


// find
let users = [
    {id: 1, username: 'tony', isAdmin: true},
    {id: 2, username: 'steve', isAdmin: false},
    {id: 3, username: 'thor', isAdmin: false},
    {id: 4, username: 'tony', isAdmin: false},
]

users.find(function(user){
    // return (조건식)
})

// username 'tony'인 사람을 찾는 코드
const tony = users.find(function(user){
    // return user.id === 2
    return user.username === 'tony' 
})
// 조건식에 해당하는 값이 여러개일 경우 첫번째 값만 출력한다.

// 조건식에 해당하는 모든 값을 출력하기 위해서 filter를 사용한다.

//filter
const tonys = users.filter(function(user){
    return user.username === 'tony'
})

console.log(tony)
console.log(tonys)

// reject
// 함수를 만들어서 사용



function reject(array, func){
    array.filter(function(user){
        // func() : user.username === 'tony'
        // return func()
        // return user.username !== 'tony'
        return !func(user)

    })
}

// // user의 무엇을 iterater하는지 못찾아서 에러 발생
// const not_tonys = reject(user, function(user){
//     return user.username === 'tony'
// })

// console.log(not_tonys)
// // => 해당하는 조건이 아닌 요소들만 리턴하는 함수




// 아래와 같은 결과가 나오도록 만들어보자
// reject(user, function(user){
//     return user.username === 'tony'
// })
// => [{id: 2, username: 'steve'}, {id: 3, username: 'thor'},]


// function reject(array, func){
//     // func 받을 함수가 우리가 reject 하는 조건 함수
//     array.filter()
// }

// function reject(array, func){
//     console.log(func())
// }

// function reject(array, func){
//     array.filter(func) // filter의 첫번째에는 함수명이 들어간다.
// }

// function reject(array, func){
//     return array.filter(function(user) {
//         return !func(user)
//     })
// }
const not_tonys = reject(users, function(user){
    return user.username === 'tony'
})

console.log(not_tonys)


//callbackfn : function집어넣어서 사용하면 됨
// every
// array의 모든 요소가 조건에 맞을 때 true, 그렇지 않으면 false를 return 한다.
const every_tony = users.every(function(user){
    // return user.username === 'tony' // false
    return user.id < 5 // true
})
console.log(every_tony) 

// 요소들 중 관리자가 있는지
const every_ad = users.every(function(user){
    return user.isAdmin === false
})
console.log(every_ad)

// some 
// array의 요소중 하나 이상 조건에 맞을 때 true, 그렇지 않으면 false를 return 한다.
const some_tony = users.some(function(user){
    // return user.id < 5 //true
    // return user.username === 'tony' // trues
    return user.isAdmin === true
})
console.log(some_tony)









































