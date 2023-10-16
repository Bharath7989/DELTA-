let url="http://universities.hipolabs.com/search?name="

async function CollegeData(country){
    let datas=await axios.get(url+country);
    console.log(country)
    // console.log(datas.data)
    return datas.data;
}
let btn=document.querySelector("button")

let p=document.querySelector("p")
btn.addEventListener("click",async()=>{
    let inp=document.querySelector("input").value
 CollegeData(inp);

})
