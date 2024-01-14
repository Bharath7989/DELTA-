const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database: 'customer', //remember while changing changes we have to also change on here.
  password:'Bharath'
});
// try{
//     //here we send single user data .
//     let q="insert into user(id,username,email,password) values (?,?,?,?)";
//     let user=["1","Bharath","Bharath@gmail.com","1234"];
//   connection.query(q,user,(err,res)=>{
//     if(err) throw err; //which throws an error
//     console.log("the result is=",res)
//   });
// }
// catch(err){
//   console.log(err); //which catches the error and prints that error.
// }

try{
    //here we send multiple users data .
    let q="insert into user(id,username,email,password) values ?";
    let user=[["4","sravan","sravan@gmail.com","4634"],
              ["5","shivaji","shivaji@gmail.com","8734"],
              ["6","mahesh","mahesh@gmail.com","4534"]];
  connection.query(q,[user],(err,res)=>{
    if(err) throw err; //which throws an error if any error occur..
    console.log("the result is=",res)
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
}