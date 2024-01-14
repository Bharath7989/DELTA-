const { faker, da } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database: 'customer', //remember while changing changes we have to also change on here.
  password:'Bharath'
});
let  getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
let data=[];
for(let i=0;i<100;i++){
    // console.log(getRandomUser());
    data.push(getRandomUser());
}

try{
    //here we send multiple users data .
    let q="insert into user(id,username,email,password) values ?";
  connection.query(q,[data],(err,res)=>{
    if(err) throw err; //which throws an error if any error occur..
    console.log("the result is=",res)
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
}

// console.log(getRandomUser());
