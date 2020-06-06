var hamburger=document.querySelector(".hamburger");
var cross_1=document.querySelector(".cross_1");
var cross_2=document.querySelector(".cross_2");
var cross_3=document.querySelector(".cross_3");

var visible=document.querySelector(".menu-trap");
var scale=document.querySelector(".menu-scale");
var opacity=document.querySelector(".menu-opac");

var switches=0;

hamburger.addEventListener("click",function(){
    if(switches==0){
        cross_2.classList.add("cross-rotate-2");
        cross_1.classList.add("cross-rotate-1");
        cross_3.classList.add("cross-rotate-3");
        visible.classList.remove("visible");
        scale.classList.remove("scale");
        opacity.classList.remove("opacity");
        switches=1;
    }
    else{
        cross_2.classList.remove("cross-rotate-2");
        cross_1.classList.remove("cross-rotate-1");
        cross_3.classList.remove("cross-rotate-3");
        visible.classList.add("visible");
        scale.classList.add("scale");
        opacity.classList.add("opacity");
        switches=0;
    }
});



