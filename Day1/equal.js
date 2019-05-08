// 아재 판독기
// 좀 더 interactive하게 만들자
const age = prompt("나이를 말해줘") // input

// 만약 30 초과이면, => alert('아재네')
// 20 초과이면, => 학식이네
// 8 초과이면, => 급식이네
// else => 이유식이네
if(age>30){
    alert('아재네')
} else if (age>20){
    alert('학식이네')
} else if (age>10){
    alert('급식이네')
} else {
    alert('이유식이네')
}

// javascript는 매우 유연한 언어이다.
// type coercion == implicit coercion == implicit type casting

