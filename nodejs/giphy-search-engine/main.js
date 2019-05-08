const input = document.querySelector('#js-userinput') // reference type 받아오는 값이 바뀌면 변수에 저장되는 값도 바뀐다.
const button = document.querySelector('#js-go')
const resultArea = document.querySelector('#result-area')


// 1. input 안의 값을 잡는다.
// const value = input.value // input 값 가져오기
// console.log(value)
input.addEventListener('keypress', (event) => { // 아무키나 눌렸을 때 실행됨
    if (event.keyCode === 13){ // 눌린 key가 enter일 때
        const value = input.value // input창에 입력받은 내용을 보여줌
        console.log(value)
        pushToDom(value)
    }
})

button.addEventListener('click', (event) => { // 마우스로 버튼을 클릭했을 때 실행됨
    const value = input.value
    console.log(value)
    pushToDom(value)
})



// 2. Giphy API 를 통해 검색한 data 를 받아서 가공한다.
// https://developers.giphy.com/
const API_KEY = ''
let keyword = "cat"
const URL = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`

const GiphyAJAXCall = new XMLHttpRequest()
GiphyAJAXCall.open('GET', URL)
GiphyAJAXCall.send()

GiphyAJAXCall.addEventListener('load', (event) => {
    const rawData = event.target.response
    const parsedData = JSON.parse(rawData)
    // console.log(parsedData.data[0].images.fixed_height.url)
    // pushToDom(parsedData.data[0].images.fixed_height.url)
    for (data of parsedData.data){
        pushToDom(data.images.fixed_height.url)
    }
    
    
})

// 3. GIF 파일들을 HTML(DOM) 에 밀어넣는다.
const pushToDom = (data) => {
    // index.html의 result-area에 밀어넣는다.
    // resultArea.innerHTML = data // 받아온 data를 HTML로 넣는다.
    // resultArea.innerHTML = `<img src="${data}" />` // 태그를 같이 받아온다. // for문을 사용하여 여러개를 받을 경우 덮어써서 마지막 하나만 남게 된다.
    // 값들을 더하여 추가해줘야 한다.
    // resultArea.innerHTML = resultArea.innerHTML + `<img src="${data}" />`
    resultArea.innerHTML += `<img src="${data}" />`
}


 // => my.js에서 종합하기
