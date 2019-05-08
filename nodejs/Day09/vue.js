// https://www.themoviedb.org/

// Profile => Settings => API => 발급

const API_KEY = ''
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const IMG_URL = 'http://image.tmdb.org/t/p/w500'

/*
// axios.get(URL)
//     .then(response => {
//         // console.log(response.data)
//         const movies = response.data.results
//     })

// const demo = new Vue({
//     el: '#main',
//     data: {
//         searchString: '', // html에서 input태그에 v-model을 searchString으로 지정해놓으면 받은 input값이 이곳으로 넘어온다.
//         movies: movies, 
//     }
// })
// axios안의 movies를 demo의 data의 movies에 어떻게 가져올까???
*/
/*
const startApp = async function () { // 외부 API 사용하기 때문에 async 사용

    // ==>
    // const response = await axios.get(URL)
    // const movies = response.data.results
    
    // // console.log(movies)
    // // http://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg

    // // IMG_URL + /or06FN3Dka5tukK1e9sl16pB3iy.jpg
    
    // // array 의 item 을 callback 에서 return 하는 값으로 바꾼 새로운 array를 반환함
    // const newMovies = movies.map(movie => {
    //     return { title: movie.title, image: IMG_URL + movie.poster_path }
    // })
    // => 아래에 completed() 를 사용하여 그 안에 넣는다.
     // <==


    // console.log(newMovies)

    // const demo = new Vue() 였는데 const demo 가 필요 없어서 삭제함

    new Vue({
        el: '#main',
        data: {
            searchString: '', // html에서 input태그에 v-model을 searchString으로 지정해놓으면 받은 input값이 이곳으로 넘어온다.
            // movies: movies, 
            // movies: newMovies,
            movies: [], // 초기화
        },
        computed: {
            // cashing // index.html에서 for 문의 movies => filteredMovies로 바꿈

            filteredMovies: function () {
                let movies_array = this.movies
                let searchString = this.searchString

                // JavaScript에서는 ('' === 0)
                if (!searchString) { // 만약 searchString 이 아무것도 없다면
                    return movies_array
                }

                searchString = searchString.trim().toLowerCase() // trim() : 처음과 마지막의 공백을 지워줌 // toLowerCase() : 전부 소문자로 바꾸기

                movies_array = movies_array.filter(movie => {
                    // movie.title 에 searchString 이 포함되면 반환
                    // if (movie.title.toLowerCase().includes(searchString)) {
                    //     // return movie
                    // }
                    return movie.title.toLowerCase().includes(searchString)

                })

                // return this.movies 
                // 키워드로 sorting 한 영화
                return movies_array
            }
        },
        // Vue 인스턴스가 초기화 되고 나서 실행하는 함수
        async created() {
            const response = await axios.get(URL)
            const movies = response.data.results

            const newMovies = movies.map(movie => {
                return { title: movie.title, image: IMG_URL + movie.poster_path }
            })

            this.movies = newMovies
        }
    })
}

// 1. 빈 무비 데이터를 가지고 있는 Vue 인스턴스가 만들어진다.
// 2. completed 함수가 실행되면서 movies 를 불러온다.
// 3. 불러온 movies 를 vue 의 data 안의 movies 에 할당한다.

startApp()
*/


// shift + alt + f : formatting

// created를 생성하면서 더 이상 startApp()이 필요 없다. 

const app = new Vue({
    el: '#main',
    data: {
        searchString: '', // html에서 input태그에 v-model을 searchString으로 지정해놓으면 받은 input값이 이곳으로 넘어온다.
        // movies: movies, 
        // movies: newMovies,
        movies: [], // 초기화
    },
    computed: {
        // cashing // index.html에서 for 문의 movies => filteredMovies로 바꿈

        filteredMovies: function () {
            // ==>
            // let movies_array = this.movies
            // let searchString = this.searchString

            // // JavaScript에서는 ('' === 0)
            // if (!searchString) { // 만약 searchString 이 아무것도 없다면
            //     return movies_array
            // }

            // searchString = searchString.trim().toLowerCase() // trim() : 처음과 마지막의 공백을 지워줌 // toLowerCase() : 전부 소문자로 바꾸기

            // movies_array = movies_array.filter(movie => {
            //     // movie.title 에 searchString 이 포함되면 반환
            //     // if (movie.title.toLowerCase().includes(searchString)) {
            //     //     // return movie
            //     // }
            //     return movie.title.toLowerCase().includes(searchString)

            // })

            // // return this.movies 
            // // 키워드로 sorting 한 영화
            // return movies_array
            // <==

            // 압축하기
            if (!this.searchString) {
                return this.movies
            }

            let searchString = this.searchString.trim().toLowerCase()
            return this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(searchString)
            })

        }
    },
    // Vue 인스턴스가 초기화 되고 나서 실행하는 함수
    async created() {
        const response = await axios.get(URL)
        const movies = response.data.results

        // const newMovies = movies.map(movie => {
        //     return { title: movie.title, image: IMG_URL + movie.poster_path }
        // })

        // this.movies = newMovies

        // 압축
        this.movies = movies.map(movie => {
            return { title: movie.title, image: IMG_URL + movie.poster_path }
        })


    }
})