//Qs 1
function larger(arr,num){
  for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
     num=arr[i];
     
    }
  }
  return num;
}
let arr=[4,3,7,5,9,2,1];
let num=5;
console.log(larger(arr,num));


//Qs 2
let country = ["Australia ", "India is a good country ever", "Germany", "United States of America"];
let ansInd=0;  
function largerStringLen(country){
for(let i=0;i<country.length;i++){
  let anslen=country[ansInd].length; //at 0 index length
  let currLength=country[i].length;  //current element length.
  if(anslen<currLength){  //at 0 index len is greater than current elment lenght then in ansInd=i;
     ansInd=i;
    }
  }
  return country[ansInd];
}
console.log(largerStringLen(country));

// Qs 4
 
let str="apna college";
let fun=(str)=>{
  let count=0;
  for(let i=0;i<str.length;i++){
    if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
    count++;
    console.log(str[i],`${i}`)
  }
  }
  return count;
}
console.log(fun(str));


//5 Generating a random number.
let start=110;
let end=116;
let func=()=>{
  let diff=end-start;
return Math.floor(Math.random()*diff)+start+1;
}
console.log(func(start,end));