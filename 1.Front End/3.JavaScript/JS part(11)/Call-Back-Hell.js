let h1=document.querySelector("h1");
function colorChange(color,delay){
    setTimeout(() => {
        h1.style.color=color;
    }, delay);
}
colorChange("red",2000);
colorChange("blue",3000);
colorChange("purple",4000);

//here we choosen basic color for better understanding.
//but if we have to store some data  in  data base then there will may dependence where 1st callback,2nd callback,3rd callback.let 3rd if callback depend on 1st callback then error occured in 1st callback  then the process will continue in the above case but which is not in below.
//in the below case if error occured in 1st callback then there is no executions means  another function  is not works but which is not in above.
//here the above example executes all the callbacks but which is not in below.


//observation:this is color that's because here showing next color even the error in 1st color
//so take some variables like a,b,c,d and make  the operation with them.
//and make the error in 2nd callback  then the execution will be stops. as we can  observe.
let h2=document.querySelector("h2");
function colorChange2(color,delay,nextColor){
    setTimeout(() => {
        h2.style.color=color;
        nextColor();
    }, delay);
}
//NESTING CALLBACKS (CALLBACK HELL :) ).
colorChange2("green",1500,function(){
   colorChange2("Yellow",1500,function(){
    colorChange2("pink",1500,function(){
      colorChange2("aqua",1500,function(){
     
      })
    })
   })
})