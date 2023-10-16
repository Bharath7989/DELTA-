let div=document.querySelector("div");
let ul=document.querySelector("ul");
let list=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("The div was clicked")}
);
ul.addEventListener("click",function(){
    event.stopPropagation();
    console.log("The Ul was clicked")}
);

for(li of list){
   li.addEventListener("click",function(){
    event.stopPropagation();
    console.log("The li was clicked")
   })
}