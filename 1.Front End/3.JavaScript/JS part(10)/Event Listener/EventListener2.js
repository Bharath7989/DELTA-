//  Type-2
//the below which gives two alerts like : one by one. as we can see in the output which is not in the type 1.
//for more eventlistener to visit mdn. like :dblclick..etc.
let button=document.querySelectorAll(".Submit")
 for( bttn of button){
  bttn.addEventListener("click",sayHelo);
  bttn.addEventListener("click",lovYou);
 }

function sayHelo(){
    alert("Hello");
 }
 function lovYou(){
  alert("LoveYou");
 }
