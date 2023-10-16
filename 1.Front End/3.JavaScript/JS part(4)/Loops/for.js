// here printing the numbers form 1 to 20 by  using the for loop.
let i=0;
console.log("Printing the numbers from 1 to 20");
for(i=1;i<=20;i++){
    console.log(i);
}

// here printing the numbers form 20 to 0 by  using the for loop.
console.log("Printing the numbers from 20 to 0");
for(i=20;i>=0;i--){
    console.log(i);
}

console.log("Printing odd numbers from 1 to 20");
for(i=1;i<20;i=i+2){
    console.log(i);
}

console.log("Printing even numbers from 1 to 20");
for(i=0;i<20;i=i+2){
    console.log(i);
}

// console.log("This is infinite loop");
// for(i=0;i<=2;i--){
//     console.log("Hello Bharath I love you");
// }
// console.log("This is another loop")
// for(i=1;i<=5;i--){
//     console.log("Hey baby");
// }

console.log("Print multiplication table");
for(let j=1;j<=10;j++){
    console.log(2*j);
}


console.log("Nested For Loop");
for(let x=1;x<=5;x++){
    console.log(`This is ${x} loop`)
    for(let y=1;y<=x;y++){
        console.log("Hello Bharath");
    }
}

