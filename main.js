//grab here elements 

let btn = document.getElementById("btn")
let slide = document.getElementById("slide")

//action is here

btn.addEventListener("click",function(){
    slide.classList.toggle("-translate-x-full")
    console.log(1)
})