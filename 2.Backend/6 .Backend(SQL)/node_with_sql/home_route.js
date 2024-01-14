const express=require("express");
const app=express();
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
app.set("view engine","ejs");
const path=require("path")
app.set("views" ,path.join(__dirname,"/views"));
const methodOverride= require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
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
let port =3030;
app.listen(port,(req,res)=>{
    console.log(`The port is working ${port}`);
})
//HOME ROUTE..
app.get("/",(req,res)=>{
try{
    let q=`select count(id) from user;`;
    connection.query(q,(err,result)=>{
    if(err) throw err; //which throws an error if any error occur..
   let count=result[0]["count(id)"];
    res.render("template.ejs",{count});
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
  console.log("some error in database");
}
})

//SHOW USER.

app.get("/user",(req,res)=>{
try{
    let q=`select * from user;`;
    connection.query(q,(err,users)=>{
    if(err) throw err; //which throws an error if any error occur..
    console.log(users);
    res.render("show_user.ejs",{users});
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
  console.log("some error in database");
}
})

// Edit user
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  try{
  let q=`select * from user where id='${id}'`;
    connection.query(q,(err,edit)=>{
    if(err) throw err; //which throws an error if any error occur..
    let user=edit[0]
    res.render("edit.ejs",{user});
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
  console.log("some error in database");
}
})

//UPDATE ROUTE
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:formpass,username:newUser,email:newEmail}=req.body;
  try{
  let q=`select * from user where id='${id}'`;
    connection.query(q,(err,edit)=>{
    if(err) throw err; //which throws an error if any error occur..
    let user=edit[0]
    if(user.password!=formpass){
      res.send("wrong password")
    }else{
       let q2=`update user set username='${newUser}' ,email='${newEmail}' where id='${id}'`;
       connection.query(q2);
       res.redirect("/user")
    }
   
    // res.render("edit.ejs",{user});
  });
}
catch(err){
  console.log(err); //which catches the error and prints that error.
  console.log("some error in database");
}
});
// try{
//     //here we send multiple users data .
//     let q="insert into user(id,username,email,password) values ?";
//   connection.query(q,[data],(err,res)=>{
//     if(err) throw err; //which throws an error if any error occur..
//     console.log("the result is=",res)
//   });
// }
// catch(err){
//   console.log(err); //which catches the error and prints that error.
// }
