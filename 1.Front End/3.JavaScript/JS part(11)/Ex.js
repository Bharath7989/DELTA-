let h1=document.querySelector("h1");
async function colorChange(color,delay){
    setTimeout(() => {
        h1.style.color=color;
    }, delay);
}

await colorChange("red",1000)
.then(()=>{
    console.log("red color was changed")
   return  colorChange("green",1000);
})
.then(()=>{
   console.log("green color was changed")
   return colorChange("Purple",1000);
})
.then(()=>{
        console.log("purple color was changed")
       return colorChange("Yellow",1000);
})
.then(()=>{
        console.log("Yellow color was changed")
})
