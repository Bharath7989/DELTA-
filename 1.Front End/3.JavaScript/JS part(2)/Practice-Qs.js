//Qs 1.
let num=20;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

//Qs 2
let age=prompt("Enter the age")
let name=prompt("Enter the name");
alert(`${name} is ${age} Years Old`);

//Qs3
let nums=1;
switch (nums) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Wrong input")
        break;
}


// Qs 4
let str=prompt("Enter the string");
if((str[0]="A"||str[0]=="B")&&str.length>=5){
    console.log("Golden string");
}

//Qs 5 Finding largest of three numbers.
  let a=3,b=4,c=5;
  if(a>b){
    if(a>c){
        console.log("a is bigger");
    }
    else{
        console.log("c is bigger");
    }
  }
  else{
    if(b>c){
    console.log("b is bigger");
    }
    else{
        console.log("c is bigger");
    }
  }
let num1=32;
let num2 = 47852;
if ((num1%10)==(num2%10)) {
     console.log("numbers have the same last digit which is",
     num1%10);
}
else {
     console.log("numbers don't have the same last digit");
}