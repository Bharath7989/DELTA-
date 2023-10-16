//Comparison Operator
let a=2;
let  b=3;
console.log(a>b);  //false
console.log(a<b);  //true
console.log(a>=b);  //false
console.log(a<=b);  //true
console.log(a==b);  //false
console.log(a!=b);  //true


// COMPARES only VALUES NOT TYPE  (==)
console.log( "COMPARE VALUES NOT TYPE(==)");
console.log(123=='123');   //true
console.log(0=='')      //true
;console.log(0==false);  //true
console.log(null==undefined);  //true

// COMPARE VALUES including TYPE  (===)
console.log( "COMPARE VALUES including TYPE(===)");
console.log(123==='123');   //false
console.log(0==='')      //false
;console.log(0===false);  //false
console.log(null===undefined);  //false

// COMPARISON FOR NON-NUMBERS

// 'a'-->61,  'b'-->62,   'A'-->41,   'B'-->42

console.log(" COMPARISON FOR NON-NUMBERS")
console.log('a'>'A');  //true
console.log('a'<'b');  //true
console.log('b'<'c');   //true
console.log('B'<'C');  // true
console.log('*'<'&');  //  false