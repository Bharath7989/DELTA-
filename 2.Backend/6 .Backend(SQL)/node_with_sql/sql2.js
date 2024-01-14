const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college',
  password:'Bharath'
});
try{
  connection.query("show tables",(err,res)=>{
    if(err) throw err; //which throws an error
    console.log("the result is=",res)
    console.log("the res[1] is=",res[0]) //if error not occured then result will be printed.
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
}
//WE CAN ALSO WRITE AS BELOW "HERE SHOW TABLES" STORED IN SEPARETE VARIABLE AND PASSING THAT VARIABLE..."
            // try{
            //   let q="show table";
            //   connection.query(q,(err,res)=>{
            //     if(err) throw err; //which throws an error
            //     console.log(res)
            //     console.log(res[1]) //if error not occured then result will be printed.
            //   });
            // }
            // catch(err){
            //   console.log(err); //which catches the error and prints that error.
            // }
connection.end(); //which is used to end the connection..!