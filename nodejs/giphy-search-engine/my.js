// main.js를 종합

const input = document.querySelector('#js-userinput') // reference type 받아오는 값이 바뀌면 변수에 저장되는 값도 바뀐다.
const button = document.querySelector('#js-go')
const resultArea = document.querySelector('#result-area')
const API_KEY = ''

// 1. input 안의 값을 잡는다.
input.addEventListener('keypress', (event) => { // 아무키나 눌렸을 때 실행됨
    if (event.keyCode === 13){ // 눌린 key가 enter일 때
        const keyword = input.value // input창에 입력받은 내용을 보여줌
        console.log(keyword)
        searchAndPush(keyword)
    }
})

button.addEventListener('click', (event) => { // 마우스로 버튼을 클릭했을 때 실행됨
    const keyword = input.value
    console.log(keyword)
    searchAndPush(keyword)
})



// 2. Giphy API 를 통해 검색한 data 를 받아서 가공한다.
// https://developers.giphy.com/
const searchAndPush = (keyword) => {
    // 검색했을 때 기존 검색 결과를 날려줘야 한다.
    resultArea.innerHTML = null

    const URL = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`
    
    const GiphyAJAXCall = new XMLHttpRequest()
    GiphyAJAXCall.open('GET', URL)
    GiphyAJAXCall.send()
    
    GiphyAJAXCall.addEventListener('load', (event) => {
        const rawData = event.target.response
        const parsedData = JSON.parse(rawData)
        for (data of parsedData.data){
            pushToDom(data.images.fixed_height.url)
        }
        
        
    })
    
}

// 3. GIF 파일들을 HTML(DOM) 에 밀어넣는다.
const pushToDom = (data) => {
    // resultArea.innerHTML += `<img src="${data}" />` // 실행할 때마다 string으로 들어간 값을 쌓은 후 변환하여 사용하기 때문에
    // 태그 생성
    const gif = document.createElement('img') // <img></img>
    // gif 에 source를 할당함
    gif.src = data // <img src="${data}" />
    // resultArea.appendChild(gif) // 실행할 때마다 원본(태그)를 하나씩 쌓아감 // innerHTML 보다 빠름
    // 앞으로 append하기
    resultArea.insertBefore(gif, resultArea.firstChild)
}

// innerHTML: 들어간 모습 그대로 생성됨 => String


