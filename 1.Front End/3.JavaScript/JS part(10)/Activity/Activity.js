  // let button=document.querySelector("button");
  //     button.addEventListener("click",function(){
  //         let h3=document.querySelector("h3");
  //         let randcolor=getRandomColor();
  //         h3.innerText=randcolor;
  //         let div=document.querySelector("div");
  //         div.style.backgroundColor=randcolor;
  //         button.style.backgroundColor=randcolor;
  //         console.log("Color Upadated");
  //     });
  //     function getRandomColor(){
  //       let red=Math.floor(Math.random()*255);
  //       let green= Math.floor(Math.random() * 255);
  //       let blue= Math.floor(Math.random() * 255);
  //      let color=`rgb(${red},${green},${blue})`;
  //      return color;
  //     }

//ABOVE AND BELOW BOTH ARE SAME I PRACTICED THE BELOW ONE FOR BETTER REMEMBERING.

  let btn=document.querySelector("button");
  btn.addEventListener("mouseenter",function(){  //as we can mouseover and dblclick(slow double  click) etc..in mdn
    let randcolor=getRandomColor();
    let h2=document.querySelector("h2");
    h2.innerText=randcolor;
    btn.style.color=randcolor;
    let div=document.querySelector("div");
     div.style.backgroundColor=randcolor;
  });
  function  getRandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
  }