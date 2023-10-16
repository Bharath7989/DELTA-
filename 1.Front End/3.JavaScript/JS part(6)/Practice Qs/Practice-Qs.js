// Practice Qs 1
console.log("Practice Qs 1")
function poem() {
    console.log("Johny Johny yes papa");
    console.log("Eating sugar no papa");
}
poem();



// Practice Qs 2
console.log("Practice Qs 2")
console.log("This is Dice");
function dice() {
    let random=Math.random()*6;
    console.log(Math.floor(random)+1);
}
 dice();


// Practice Qs 3
console.log("Practice Qs 3")
// creating a function that gives us the average of three numbers.
console.log("Finding the average of three numbers.")
function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
average(2,4,6);
average(8,6,4);


// Practice Qs 4
console.log("Practice Qs 4")
//Printing the multiplication of  a number
console.log("Printing the multiplication of  a number.");
function multi(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}
multi(5);



// Practice qs 5
console.log("Practice Qs 5")
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
console.log("Practice Qs 6")
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
console.log("Practice Qs 6")
console.log("Return a string that concatenation of all strigs in an array");
function concate(str2){
    let straddi="";
    for(let i=0;i<str.length;i++){
       straddi+=str2[i];
    }
    return straddi;
}
console.log(concate(["Hi","hello","Bye","!"]));


// Practice Qs 7
console.log("Practice Qs 7")
let greet="Hello";
function changeGreet(){
    let greet="Namaste";
    console.log(greet);
     function innerGreet(){
        console.log(greet);
     }
}
console.log(greet);
changeGreet();
