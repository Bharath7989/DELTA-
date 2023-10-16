// IF STATEMENT
console.log("IF Statement")
let age=20;
if(age>=18){
  console.log("You are eligible for voting");
}

// IF-ELSE STATEMENT
console.log("IF-ELSE statement");
 let a=15;
  if(a>=18){
    console.log("You are eligible for driving");
  }
  else{
   console.log("You are not eligible for driving ")
  }

// ELSE-IF STATEMENT
console.log("IF-ELSE-IF statement");
let x=10,y=20;
console.log('Else-if statement');
 if(x>y){
    console.log("x is bigger than y");
 }
 else if(x<y){
    console.log("x is lessthan y");
 }
 else if(x==y){
  console.log("x is equal to y");
 }
 else{
    console.log("You given a wrong input....!")
 }

//Nested if-else
console.log(" NESTED-IF-ElSE")
let num1=10;
let num2=20;
let num3=30;

if(num1>num2){
    if(num1>num3){
        console.log("num1 is bigger");
    }
    else{
        console.log("num3 is bigger");
    }
}
else{
     if(num2>num3){
      console.log("num2 is bigger");
     }
     else{
        console.log("num3 is bigger");
     }
}


//Switch statement
console.log("SWITCH STATEMENT");
 let color="red";
 switch (color) {
        case "orange":
        console.log("This is orange");
        break;
        case "green":
        console.log("This is green");
        break;
        case "red":
        console.log("This is red");
        break;
        case "pink":
        console.log("This is  pink");
        break;
        case "purple":
        console.log("This is purple");
        break;
        case "yellow":
        console.log("This is yellow");
        break;
    default:
        console.log("Entered wrong input")
        break;
 }
 
console.log("PRACTICE QS");
 let day="7";
 switch (day) {
    case "1":
    console.log("This is monday");
    break;
      case "2":
    console.log("This is tuesday");
    break;
      case "3":
    console.log("This is wednesday");
    break;
      case "4":
    console.log("This is thursday");
    break;
      case "5":
    console.log("This is friday");
    break;
      case "6":
    console.log("This is saturday");
    break;
      case "7":
    console.log("This is sunday");
    break;
      default:
        console.log("You entered wrong input.");  
    break;
 }