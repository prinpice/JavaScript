
// tag 단위로 selecting하는것은 좋지 않은 관례이다.
// document.querySelector('img')
// img태그가 여러개일 경우 필요없는 값도 가져오게 된다.
// => id를 지정하여 selecting한다.
const dooly = document.querySelector('#dooly')
console.log(dooly)


// event : browser에서 조건을 부르는 단어
//.addEventListener : 우저가 특정 작업을 하였을 때 event가 발생하게 함
// dooly.addEventListener('click', function(현재 이벤트){}) // 아무것도 아니었던 html에 addEventListener을 하는 순간 귀가 달린다.(행동을 할 수 있도록)


// 이벤트리스너('이벤트의 이름', 함수)
//  함수 : 이벤트가 발생했을 때 정의할 사용자 정의 함수
// e : 현재 이벤트, event를 축약해서 사용
dooly.addEventListener('click', function(e){
    console.log('호이')
    alert('호이')
    console.log(e)
})
// 인스타그램에서 좋아요를 눌렀을 때 발생하는 이벤트를 이렇게 처리한 것


// 둘리에게 이벤트를 다는 것 같지만 문서에 이벤트를 걸어주는것
// => html 문서 전체에도 이벤트를 정의할 수 있다.
// keydown : 키를 눌렀을 때
document.addEventListener('keydown', function(e){
    console.log(e.keyCode)
    if (e.code === 'Space'){
        alert('스페이스 누르셨네요?')
        // 마진을 조절하여 이미지를 움직인다.
    } else if (e.code === "ArrowUp"){
        dooly.style.marginBottom  = "100px"
    } else if (e.code === "ArrowLeft"){
        dooly.style.marginRight  = "100px"
    } else if (e.code === "ArrowRight"){
        dooly.style.marginLeft    = "100px"
    }
})

// event code가 키보드마다 다를 수 있다.
// 표준으로 사용함 code => keyCode (code값이 숫자로 나옴)
// http://keycode.info/ 참고


