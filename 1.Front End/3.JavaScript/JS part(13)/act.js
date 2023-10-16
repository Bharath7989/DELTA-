let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    let colleges=await getCollege(country);
    console.log(colleges)
    showColleges(colleges);
})
function showColleges(colleges) {
    let list=document.querySelector("ul");
         list.innerText="";
      for(clg of colleges){
        let li=document.createElement("li");
        li.innerText=clg.name;
        list.appendChild(li);
      }
 
    }
 async function getCollege(country){
    let res=await axios.get(url+country);
   return await (res.data);
 }
