let h2=document.querySelector("h2");
 function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        let rand=Math.floor(Math.random()*10)+1;   
     
          if(rand>4){
               setTimeout(() => {
                    h2.style.color=color;
                resolve();         
                    }, delay);  
                    console.log("The number is=",rand);
                } 
           else{
            reject("error");
           }
        })
    }
   
async function color(){
    try{
        await colorChange("red",1000)
        await colorChange("green",1000);
        await colorChange("blue",1000);
        await colorChange("purple",1000);
        await colorChange("yellow",1000);
    }
    catch(err){
        console.log(err)
    }


let a=10,b=20;
console.log("The addition is=",a+b);
}