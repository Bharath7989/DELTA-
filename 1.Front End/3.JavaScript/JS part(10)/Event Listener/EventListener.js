let btns=document.querySelectorAll("button");
//the below code sends only one alert as we can check but if want both alerts then follow type-2
 for( btn of btns){
  btn.onclick=sayHello;
  btn.onclick=loveYou;
 }

function sayHello(){
    alert("Hello");
 }
 function loveYou(){
  alert("LoveYou");
 }

