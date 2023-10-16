let url="https://dog.ceo/api/breeds/image/random";
let img=document.querySelector("img");
let btn=document.querySelector("button");

async function getImg(){
    let imgs=await axios.get(url);
    let resImg=imgs.data.message;
return resImg;
}

btn.addEventListener("click",async ()=>{
   let imgLink=await getImg();
   img.setAttribute("src",imgLink);
})