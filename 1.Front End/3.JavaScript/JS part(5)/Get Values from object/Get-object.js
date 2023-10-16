let student={
    name:"Bharath",
    age:20,
    group:"Mpcs",
    city:"Mhbd"
};
//here the below lines are accessing  the data from object.
console.log(student.name); 
console.log(student["group"]); // we can also access like this.
console.log(student.age=18); //here changed the age to 18yrs.




//if we create by using numbers and keywords then there didn't any error as shown in below. 
const obj={
    1:"a",
    2:"b",
    3:"c",
    true:"d",
    null:"e",
    undefined:"f",
};
//accessing the above data
console.log(obj[2]); //but here we can't write like: (obj.2);
console.log(obj.null);