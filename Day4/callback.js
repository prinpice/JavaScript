// 파일 가져오는 함수 : 외부 라이브러리

const fs = require('fs') // fs : filesystem // import

// fs.readFile('파일명/경로', function(에러, 내용물(BufferStream에 들어갈 file data)) {readFile함수 실행 후 실행될 함수})


fs.readFile(__dirname + '/test.md', 'utf-8', (socks, jik) => {  // __dirname : 현재폴더경로
    console.log(jik)
 })

// callback함수 사용 이유 : 흐름을 제어하기 위해서

// => git bash에서 node로 실행하기


// callbackhell.com
// 함수안에함수안에함수안에 => 너무 비효율적
