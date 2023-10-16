//EX:1
function add(a,b){
    return a+b;
}
let sum=add(2,4);
console.log(sum);
// or we can do in single line
console.log(add(3,5));

// EX:2
console.log("This is subtraction--> sub(sub(8,2),4)")
function sub(a,b){
    return a-b;
}
let subtraction=sub(sub(8,2),4);
console.log(subtraction)

// EX:3
console.log("")
function fun(){
console.log("hello world");
console.log("This is Bharath Goud");
return 0;  //after return statement no execution inside the function.
console.log("hello world");
console.log("This is Bharath Goud");
}
fun();

// Ex:4
function isAdult(age){
     if(age>=18){
        return "audult";
     }
     else{
        return "Not adult";
     }
    //  here the below code is not working as we can see in the output.
     console.log("Good Bye.....!");
}
console.log(isAdult(18));
console.log(isAdult(15));

// Practice qs 5
console.log("Printing the numbers  from 1 to n")
function num(n){
    let sum=0;
    for(let i=0;i<=n;i++){
    sum=sum+i;
    }
    return sum;
}
console.log(num(5));

// Practice Qs 6
console.log("Return a string that concatenation of all strigs in an array");
let str=["Hi","hello","Bye","!"];
function concate(str){
    let stradd="";
    for(let i=0;i<str.length;i++){
       stradd+=str[i];
    }
    return stradd;
}
concate(str);//call this in js console screen here it is not working.

// Practice Qs 6
console.log("Return a string that concatenation of all strigs in an array");
function concate(str2){
    let straddi="";
    for(let i=0;i<str.length;i++){
       straddi+=str2[i];
    }
    return straddi;
}
console.log(concate(["Hi","hello","Bye","!"]));