//we can pass function as an argument as our requirement.
let greet=function(){
    console.log("Hello Baby......!")
}

function multipleGreet(greet,n) {
    for(let i=0;i<n;i++){
        greet();
    }
}
console.log(multipleGreet(greet,1090));


//this is another way to passing functin as an argument.
//the difference for above and below is in the above case we passed the variable because we stored the function in variable.
//in the below case we directly passing  the function to that parameter.
function multipleGreet(greet,n) {
    for(let i=0;i<n;i++){
        greet();
    }
}
let a=multipleGreet(function(){
    console.log("Hello world");
},100);
console.log(a);