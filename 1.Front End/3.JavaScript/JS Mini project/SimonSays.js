let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let color=["red","green","yellow","blue"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(start==false){
    start=true;
    console.log('The game is started')
    levelUp();
  }
})

function flash(btn){
    btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor=color[randInd];
    let randBtn=document.querySelector(`.${randColor}`)
   console.log(randInd)
   console.log(randColor)
   console.log(randBtn) 
   flash(randBtn);

}
function userflash(btn){
    btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function btnPress(){
  let btn=this;
  userflash(this);

}

let btns=document.querySelectorAll(".simon");
for(btnn of btns){
  btnn.addEventListener("click",btnPress)
}