const express=require('express');
const path=require('path')
const loginDatabase=require('../Database_login/model').module
const route=express.Router();


route.get('/',(express.static(path.join(__dirname,"public_static","signup"))))

route.post('/add',(req,res)=>{

    loginDatabase.Login.create({
            Username:req.body.username,
           Name:[req.body.firstname,req.body.lastname],
           Dob:req.body.dob,
           SecurityAns:req.body.securityans,
    returning:true
    }).then((user)=>{
        //Since i Did returnin true so that value is stored in user now
        //Entering values into tables
        loginDatabase.Passwords.create({
        Password:req.body.password,
        loginuser1Id:user.Id
    })
//Change made here
        res.redirect('/login')
        }).catch(()=>{
            res.sendStatus(404,{msg:"invalid input"})
    })
    })

exports.route=route;

//Mysql Approach
// route.post('/add',(req,res)=>{
//     databasesign.signup({username:req.body.username,password:req.body.password,securityques:req.body.squestion,securitypass:req.body.spass},()=>{
//         res.redirect('..');
//     })
// })
//