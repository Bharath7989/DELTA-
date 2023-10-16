let num=Math.random(); //-->which only gives random numbers form 0 to <1.
console.log(num);

let num2=Math.random()*10; //which gives random numbers from 0 to 10 with decimal.(8.251302185320801)
console.log(num2); 

let num3=Math.floor(num2) //which gives random numbers from 0 to 1.(1,5,2,7,,4,8..etc)
console.log(num3);



// Practice Qs
// generating a random number from 1 to 100
let random=Math.random()*100;
console.log(Math.floor(random)+1);

//generating a random number form 20 to 15
let random2=Math.random()*5;
console.log(Math.floor(random2)+20);