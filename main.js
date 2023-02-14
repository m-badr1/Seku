var fontTh=document.querySelector(".badr")
var solid=document.querySelector(".responsive");
var xmark=document.querySelector(".xmark");



fontTh.onclick =function(){
    solid.classList.add("open")
    // fontTh.style.display="none";
    // xmark.style.display="block";
}

xmark.onclick =function(){
    this.parentElement.classList.remove("open")
    // fontTh.style.display="block";
    // xmark.style.display="none";
}





// ScrollToTop/////////////////////////////////
let span=document.querySelector(".up");
span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth"
        
    })
}


solid.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth"
        
    })
}

window.onscroll = function(){
    // ScrollToTop/////////////////////////////////
    if(this.scrollY >= 1000){
        span.classList.add("show")
    }else{
        span.classList.remove("show")
    }


    if(this.scrollY >= 1000){
        solid.classList.remove("open")
    }
    if(this.scrollY >= 1000){
        xmark.classList.remove("open")
    }
}




