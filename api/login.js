const express=require('express');
const path=require('path')
const loginDatabase=require('../Database_login/model').module
const route=express.Router()
route.get('/',
    (express.static(path.join(__dirname,"public_static","login"))));
//Send this file at the path....

// route.get('/forgetpassword',express.static(path.join(__dirname,"public_static","login","forgetpassword")))
//The html files aren't hitting the server requests , they are just loaded by public_static
route.post('/',(req,res)=>{
    loginDatabase.Passwords.findAll({
        where:{
            password:req.body.password
        }},{returning:true}).then((user)=>{
            //check here
        if(user[0]==null){
            res.send(null);
        }
        else
            {
                loginDatabase.Login.findAll({
                    where:{username:req.body.username }
                    }).then((loggeduser)=>{  res.send(loggeduser);}).catch((err)=>{if(err) throw err})

        }
}).catch((err)=>{if(err) throw err})})

route.post('/forgetpassword',(req,res)=>{
    loginDatabase.Login.find({where: {username :req.body.username}}).then((data)=>{ console.log(data)
        res.send(data)
    }).catch((err)=>{
        if (err) throw err
    })
})


route.post('/forgetpassword/security',(req,res)=>{
    loginDatabase.Login.find({where: {Id :req.body.Id}}).then((data)=>{ console.log(data)
        res.send(data)
    }).catch((err)=>{
        if (err) throw err
    })
})
route.post('/forgetpassword/:id',(req,res)=>{
    loginDatabase.Passwords.update({Password:req.body.newpassword}, {where:{
            loginuser1Id:req.params.id
        }}).then(()=>{
        res.send(true);

    }).catch((err)=>{
        if (err) throw err;
    })
})

exports.route=route;





// route.post('/logincheck',(req,res)=>{
//     loginDB.logincheck({username:req.body.username, password:req.body.password},(result)=>{
//         // localStorage.setItem('user',result.username)
//         console.log(result);
//         res.send(result);
//     }
//     )
//
// })

//OLD Approach
//         if(user=[]) res.send(null);
//       console.log(user);
//         loginDatabase.Passwords.findAll({   //Read the Docs for Include stuff Mixing .....
//
//             where:{loginuser1Id:user.Id}
//         }).then(()=>{
//             res.send(user)
//         }).catch((err)=>{if(err) throw err})
//     }).catch((err)=>{if(err) throw err})