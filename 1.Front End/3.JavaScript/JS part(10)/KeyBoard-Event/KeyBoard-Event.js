let inp=document.querySelector("input");
inp.addEventListener("keydown",function(){
    console.log("The key  pressed")
    this.style.color="red"
})

let inp2=document.querySelector(".input");
inp2.addEventListener("keyup",function(){
    console.log("The key was pressed")
    this.style.color="green"
})