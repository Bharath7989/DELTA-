 let name="      Bharath Goud    ";
//    Str.trim();
// remove the space from both ends of string. & returns a new one.
let trim=name.trim();
console.log(trim);

//Strings are immutable in js means when we perform some operation then original string doesn't change.


// Touppercase and ToLowercase
console.log("**ToLowercase");
let str="Bharath";
console.log(str.toLowerCase());
console.log("**ToLowercase");
console.log(str.toUpperCase());

// String methods with arguments
// argument is some value that we passed to the method.
 
   //indexof()
   console.log("##This is indexOf()")    
   let a="Hello Bharath Goud";
   console.log(a.indexOf("Goud"));

   //METHOD CHAINING.
   //using one method after another.order of execution will be left to right.
   console.log("This is method chaining.")
   let x="  hello I Love You Baby...!   ";
   console.log(x.toLowerCase().trim());

  //Slice
  console.log("This is Slice");
  let y="Hello Bharath Goud";
  console.log(y.slice(6));
  console.log(y.slice(14,18));
  console.log(y.slice(-4))

//Replace
console.log("This is Replace");
let z="This is full stack developer";
console.log(z.replace("This is" ,"Iam a "));

// Repeat
console.log("This is Repeat");
let love="hello bharath i love you";
console.log(love.repeat(3));

// Practice Qs
let msg="  Help  ";
console.log(msg.trim().toUpperCase());
let names="Apna College";
console.log(names.slice(5,12));
console.log(names.indexOf("College"));
console.log(names.replace("Apna","mana"));
console.log(names.replace("ll","tt").slice(5));e