// 1.menu.js

// lodash를 import함
var _ = require('lodash')
// node.js에서 변수는 var자료형으로 만든다.
var menus = ['짜장면', '짬뽕', '볶음밥'] // Array 배열
// 배열의 아이템 중 랜덤으로 뽑아 저장함
var pick = _.sample(menus)
// 특정 인덱스를 가진 요소를 출력
console.log(menus[1])
// node(local)에서 실행하기 때문에 alert 같이 브라우저에서 사용하는 함수를 사용할 수 없다.