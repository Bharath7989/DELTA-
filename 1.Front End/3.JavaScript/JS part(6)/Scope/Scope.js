console.log("Here we discussed the function scope and global scope")
function fun2(a,b){
    let sum=a+b;
    console.log(sum);
}
console.log(fun2(2,3));

// the above one is executes  successfully.




function fun(a,b){
    let sum=a+b; //here the sum variable is used only inside the function 
//only but we cannot access it outside of the function as we can see the error
}
let d=fun(2,4);
console.log(sum); //this line accessed  the sum variable to outside.



// The below one is the global variable where that variable can be accesed whereever in the program
let sum=54;  //global scope
function fun3(a,b){
    let sum=a+b;
    console.log(sum);
}
fun3(5,4);
console.log(sum);



// we can use global scope variable inside the function.
console.log("global scope using inside the function.")
let sum2=30;  //global scope
function fun4(a,b){
    console.log(sum2);
}
fun4(5,4);
console.log(sum2);