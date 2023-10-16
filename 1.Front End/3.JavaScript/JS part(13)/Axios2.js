let url="https://catfact.ninja/fact";

async function catfact(){
    let res=await axios.get(url);
   let facts= res.data.fact;
   console.log(facts)
   return facts;-0
}

let p=document.querySelector("p");
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    console.log("button was clicked")
    let facts =await catfact();
    p.innerText=facts;
})

