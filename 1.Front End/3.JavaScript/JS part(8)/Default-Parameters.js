// This is type one.
function sum(a,b=5){
  console.log("The sum1 is=",a+b)
}
sum(3);  //--->8

// This is type two.
function sum2(a=2,b){
    console.log("The sum2 is=",a+b);
}
sum2(1,4);  //--->5


// This is type three.
function sum3(a=2,b){
    console.log("The sum3 is=",a+b);
}
sum3(4);  //--> here 4 is not initialized for b its initialized for a only.