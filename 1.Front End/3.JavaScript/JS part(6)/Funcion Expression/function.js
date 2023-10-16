//here assigned a function in a variable.
const hello=function(){
    console.log("Hello World");
}
hello();

//in the below case we can't assigning a function because it's constant.
// hello=function(){
//     console.log("nameste");
// }
// hello();

//this  is addition function assinging to a variable.
const sum=function(a,b){
    console.log(a+b);
}
sum(2,4);

//making a function by using return keyword.
const avrg=function(a,b,c){
    let avg=(a+b+c)/3;
    return avg;
}
console.log("The average is =")
console.log(avrg(2,4,6));