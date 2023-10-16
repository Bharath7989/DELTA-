let btn=document.querySelector("button")
let p=document.querySelector("p")
let h1=document.querySelector("h1")
let h3=document.querySelector("h3")

// btn.addEventListener("click",function(){
//     console.dir(btn.innerText);
//     this.style.color="orange";
// });
// p.addEventListener("click",function(){
//     console.dir(p.innerText);
//     this.style.color="orange";
// });
// h1.addEventListener("click",function(){
//     console.dir(h1.innerText);
//     this.style.color="orange";
// });
// h3.addEventListener("click",function(){
//     console.dir(h3.innerText);
//     this.style.color="orange";
// });


//BUT THE ABOVE CODE WE CAN ALSO WRITE AS..SHOWN IN BELOW

function colorChange(){
    console.dir(this.innerText);  //here this is used for that element which called function.
    this.style.color="orange";
}
btn.addEventListener("click",colorChange);
p.addEventListener("mouseenter",colorChange);
h1.addEventListener("click",colorChange);
h3.addEventListener("click",colorChange);