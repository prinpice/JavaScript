// 7.lottery-match.js
var _ = require('lodash')

const luckNumbers = [29, 32, 44, 24, 2, 41]

// 랜덤으로 생성한 6개의 숫자가
// luckNumbers 와 얼마나 매칭하는지 카운트를 반환하는 함수
let randomNumbers = _.sampleSize(_.range(1, 46), 6)
console.log(randomNumbers)
// const match = (randomNumbers, luckNumbers) => {
//     return (_.difference(randomNumbers, luckNumbers)).length
// }
// console.log(match(randomNumbers, luckNumbers))

const match = (randomNumbers, luckNumbers) => {
    let cnt = 0
    for (randomNum of randomNumbers){
        if (luckNumbers.includes(randomNum)){
            cnt += 1
        }
    }
    return cnt
}

console.log(match(randomNumbers, luckNumbers))

const match = (randomNumbers, luckNumbers) => {
    let cnt = 0
    for (randomNum of randomNumbers){
        if (_.includes(luckNumbers, randomNum)){
            cnt += 1
        }
    
    }
    return cnt
}

console.log(match(randomNumbers, luckNumbers))