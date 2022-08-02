
import  * as functiontestWebP from "./modules/webp.js";
functiontestWebP.isWebp();


const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav__menu");








searchBtn.addEventListener("click", function(){
    let navLeft = document.querySelectorAll(".nav__inner");
    for(let i = 0; i < navLeft.length; i++){
        let Navleft = navLeft[i];
         Navleft.classList.toggle("active");
         searchBtn.classList.toggle("close");
         input.classList.toggle("square");
    }
})



burger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("no-scroll")
    burger.classList.toggle("_active");
    navMenu.classList.toggle("_active");
})



$(document).ready(function(){
    $('.slider').slick({
        pauseOnFocus:false,
        pauseOnHover:false,
        arrows:false,
        dots:true,
        adaptiveHeight:false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:4500,
        mobileFirst:false,
        appendDots:$('.content'),
        pauseOnDotsHover:true,




    });

})


$(document).ready(function(){
    $('.reviews__slide').slick({
        pauseOnFocus:false,
        pauseOnHover:false,
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed:4500,
        mobileFirst:false,
        pauseOnDotsHover:true,
        appendArrows:$('.reviews__content')




    });

})



$(document).ready(function(){
    $('.recalls__slide').slick({
        pauseOnFocus:false,
        pauseOnHover:false,
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed:4500,
        mobileFirst:false,
        pauseOnDotsHover:true,
        appendArrows:$('.recall__content')




    });

})



if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector("body").classList.toggle("arrow")
  } else {
    document.querySelector("body").classList.toggle("no-arrow")
}





document.querySelectorAll(".dropdown__item").forEach(el =>{
    el.addEventListener("click", () =>{
        let content = el.nextElementSibling;
        console.log(content)

        if(content.style.maxHeight){
            document.querySelectorAll(".dropdown__content").forEach((el) => el.style.maxHeight = null)
        }else{
            document.querySelectorAll(".dropdown__content").forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + "px"
        }




    })
})