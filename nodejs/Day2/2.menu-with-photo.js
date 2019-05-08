// 2.menu-with-photo.js
var _ = require('lodash')
var menus = ['짜장면', '짬뽕', '볶음밥']
var pick = _.sample(menus)
console.log('오늘의 메뉴는 ' + pick)
console.log(`오늘의 메뉴는 ${pick}`)
var object = { // key값에 qutation없이 작성해도 된다.
    짜장면:'http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg',
    짬뽕:'https://png.pngtree.com/element_origin_min_pic/00/00/11/095823383855d7e.jpg',
    볶음밥:'http://food.chosun.com/site/data/img_dir/2012/08/08/2012080802054_0.jpg'
}
console.log(object[pick])
console.log(object.pick) // undifined // key값 중에서 pick이 없기 때문에다
                            // .을 통해서는 변수 입력하지 못한다.