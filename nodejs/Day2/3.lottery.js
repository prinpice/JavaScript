// 3.lottery.js

var _ = require('lodash')
// js에는 range함수가 없다. lodash를 사용하여 입력한다.
var numbers = _.range(1, 46);

console.log(numbers)

var picks = _.sampleSize(numbers, 6)
console.log(picks)
console.log(`행운의 번호는 ${picks}`)