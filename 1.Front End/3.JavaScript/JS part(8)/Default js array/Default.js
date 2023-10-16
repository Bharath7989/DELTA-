function add(){
    console.log(arguments);
}
add(3,4,5,6);
//the above code works when the below code is cut and save and run and again paste.


function add(...arguments){
  return  arguments.reduce((add,el)=>(add+el))
}
console.log(add(1,2,3,4));

//This is another function.
let mins;
function min(...arr){
    mins= arr.reduce((min,el)=>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
}
min(2,3,4,5,6);
console.log(mins);


//above and below is same but return type and storing in a variable.

let mins2;
function min2(...arr2){
    mins2= arr2.reduce((min,el)=>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
}
min2(3,2,6,9,4,1,8,);
console.log(mins2);