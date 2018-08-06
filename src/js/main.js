import $ from 'jquery'
import 'slick-carousel'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

$('button').on('click', () => {
    window.alert('hello webpack')
})

const babel = () =>{
    console.log('hello world')
}

babel()

$(document).ready(function(){
 　$('.your-class').slick({
 　accessibility: true,
    arrows: true
 　});
 });