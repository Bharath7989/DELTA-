let random=Math.floor(Math.random()*100);
console.log("The random number is=",random);
let guess=prompt("enter the number");
guess=parseInt(guess);
while(true){
    if(guess==random){
        console.log("congratulation you are right.")
        break;
    }
    else if(guess<=random){
        console.log("Your number is lessthan");
    }
    else if(guess>=random){
          console.log("Your number is largerthan");
    }
   guess=prompt("enter the number");
}
