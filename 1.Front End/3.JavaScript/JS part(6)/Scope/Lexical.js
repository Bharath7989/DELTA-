//here we accesed the outer function's variable inside the function.
function outer(){  //function1
    let a=10;
    let b=20;
    function inner(){  //function2 we can access the variables from parent function.
     console.log(a);  //but in objects we cannot.
    }
    inner();
}
outer();
// Note:we cannot access inner function's variable outside.



function outerfunc(){
     function innerfunc(){
     console.log(b);
    }
    let a=30;
    let b=40;
   
    innerfunc();
}
outerfunc();