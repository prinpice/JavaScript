// 02.useAxios.js

// AjaxCall(요청보내는 것들)
/*
fetch 
XMLHttpRequest
axios // strong // 거의 모든 사이트에서 Javascript에서 axios를 사용하여 요청을 보낸다. 
*/

// axios // 외부 라이브러리
// github의 axios 사용방법 나와있음
// cdn방법 사용하기(browser)

const URL = 'https://dog.ceo/api/breeds/image/random'
/*
axios.get(URL) // html파일에서 선언했음 // 비동기 요청
    .then(response => { // 외부 라이브러리를 호출할 때,  Promise 함수이므로 then을 사용한다.
        // console.log(response)
        const imageURL = response.data.message

        const imgBox = document.querySelector('.img-box')
        const img = document.createElement('img')
        img.src = imageURL

        imgBox.appendChild(img)
    }) 
*/

// Javascript의 모든 AjaxCall은 axios를 사용할 것!!

// TODO: Use async await
const getImageUrl = async () => {
    const response = await axios.get(URL) // 비동기를 await해서 결과값 가져옴
    const imageURL = response.data.message

    const imgBox = document.querySelector('.img-box')
        const img = document.createElement('img')
        img.src = imageURL

        imgBox.appendChild(img)

}

getImageUrl()


// Tip : git commit에도 convention이 있다.
// git add .
// git commit -m "여기에 바로 작성하면 구체적으로 무엇을 했는지 모른다."
// 1번째 줄 : Install axios // 동사 start
// 2번째 줄 : 비운다.
// 3번째 줄 ~ : 작업한 내용 알아볼 수 있게 작성