let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
console.log("The task  added");
let li=document.createElement("li");
li.innerText=input.value;

let del=document.createElement("button");
del.innerText="Delete";
del.classList.add("delete")
li.appendChild(del);
ul.appendChild(li);
input.value="";
});

ul.addEventListener("click",function(){
   console.log(event.target.nodeName);
   if(event.target.nodeName=="BUTTON"){
  event.target.parentElement.remove();
  console.log("Deleted successfully");
   }

})