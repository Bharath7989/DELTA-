const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college',
  password:'Bharath'
});
try{
    let q="show tables"
  connection.query(q,(err,res)=>{
    if(err) throw err; //which throws an error
    console.log("the result is=",res)
    console.log("the res[1] is=",res[0]) //if error not occured then result will be printed.
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
}