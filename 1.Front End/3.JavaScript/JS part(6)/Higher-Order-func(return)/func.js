function checkevenodd(request){
 if(request=="Even"){
  return function(n){
      console.log(n%2==0);
   }
 }
 else if(request=="odd"){
    return function(n){
      console.log(n%2!=0);
    }
 }
 else{
    return "Wrong input";
 }
}
let request="odd";
let func=checkevenodd(request);
console.log(func);




// // in the above case we passed function as an argument but now we going to giving variable as an argument.and storing the function in a variable.
// function checkevenodd(request1){
//  if(request1=="even"){
//   let even =function(n){
//       console.log(n%2==0);
//    }
//  return even;
//  }
//  else if(request1=="odd"){
//     let odd=function(n){
//       console.log(n%2!=0);
//     }
//   return odd;
//  }
//  else{
//     return "Wrong input";
//  }
// }
// let request1="odd";
// let fun=checkevenodd(request1); //here is calling the  checkevenodd() after calling odd function stored in fun variable. Then fun(3) is true.
// console.log(fun);