// alert('이제 JS 공부 시작!')
// console.log('이건 콘솔로그')
/* 
이것은 멀티라인 커멘트 
입니다.
*/
document.write('<h1>아무말</h1>')
document.write('<p>아무말</p>')

// document.querySelector('태그의 이름')
// global에 속한 변수 control못함
ptag = document.querySelector('p')
ptag.innerText = "gmgmgm"
console.log(ptag)
// document.querySelector('p').innerText = "몰랑몰랑"

// javascript 원시 자료형(Primitive Data Type)
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. (symbol)


// var : variable functional scope
// 일반적으로 정의할 때 block scope를 사용한다.
// 직관에 맞게 설정하는 것은 const와 let이 적절하다
// const : 다시 설정이 필요하지 않을 때
// let : 다시 설정이 필요할 때 (변수의 생존주기를 )

