function PrintInfo(name,age) {
    console.log(`${name}'s age is ${age}.`);
}
//passing the values to argument.
PrintInfo("Bharath",20);
PrintInfo("Teja",20);


// Qs
function add(a,b){
    console.log("the addition is=",a+b);
}
add(2,6);
add(3,2);

// Practice Qs 3
// creating a function that gives us the average of three numbers.
console.log("Finding the average of three numbers.")
function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
average(2,4,6);
average(8,6,4);


// Practice Qs 4
//Printing the multiplication of  a number
console.log("Printing the multiplication of  a number.");
function multi(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}
multi(5);
