async function hello(){
    return new Promise((resove,reject)=>{
      setTimeout(() => {
        let ran=Math.floor(Math.random()*10)+1;
        console.log("This is random num=",ran)
        resove(); 
      }, 3000);
       
    })
}
async function getRan(){
    await hello();
     hello();
}