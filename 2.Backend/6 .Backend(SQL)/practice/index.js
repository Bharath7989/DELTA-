const express=require("express");
const app=express();
const mysql = require('mysql2');
const port=3000;
app.set("view engine","ejs");
const path=require("path");
app.set("views",path.join(__dirname,"/views"));
const methodOverride= require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.listen(port,(req,res)=>{
    console.log(`The port was running..!${port}`);
})
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'customer',
  password:'Bharath'
});

// Show route
app.get("/user",(req,res)=>{
    try{
    let q=`select * from user;`
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let users=result;
        res.render("show_user.ejs",{users});
        console.log(users);
    })
   }
    catch(err){
        console.log(err);
    }
});

// edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    try{
    let q=`select * from user where id='${id}';`
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let edit=result[0];
        // console.log(edit[0]);
       res.render("edit.ejs",{edit})
        // console.log(users);
    })
   }
    catch(err){
        console.log(err);
    }
});

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:newPass,username:newUser}=req.body;
     try{
    let q=`select * from user where id='${id}';`
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user=result[0];
        if(newPass!=user.password){
            res.send('wrong password');
        }else{
          let q2=`update user set username='${newUser}'where id='${id}';`
         connection.query(q2,(err,result)=>{
            res.redirect("/user");
         });
        }
        // console.log(edit[0]);
     
        // console.log(users);
    })
   }
    catch(err){
        console.log(err);
    }
})