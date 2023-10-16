let student={
    name:"Bharath",
    age:20,
    class:9,
    subject:["math","eng","science","computer"],
    username:"Bharath@123",
}
// let {name:nam}=student;
// let {username:user}=student;

//INSTEAD OF ABOVE WE USE BELOW.
let {name:nam,username:user}=student;

let {city="mumbai"}=student;