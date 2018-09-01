const Sequelize=require('sequelize') ,
    Datatypes=Sequelize.DataTypes
    dB_Config=require('../database_config').DB

const db=new Sequelize(dB_Config.DATABASE,dB_Config.USER,dB_Config.PASSWORD,{
    host:dB_Config.HOST,
    dialect:"mysql"
})

const Login=db.define('loginuser1',{
    Id:{ autoIncrement:true,
        type:Datatypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    Username:{
      type:Datatypes.STRING,
      allowNull:false
    },
    Name:{
        type:Datatypes.STRING,
        get:function () {
            this.getDataValue('Name').split(';')
        },
        set:function (val) {
            this.setDataValue('Name',val.join(';'))
        },
        allowNull:false
    },
    Dob:{
        type:Datatypes.DATE
        ,allowNull:false
    },
    SecurityQues:{
        type:Datatypes.STRING
    },
    SecurityAns:{
        type:Datatypes.STRING
    }
})

const Passwords=db.define('loginpassword',{
    Id:{ autoIncrement:true,
        type:Datatypes.INTEGER,
        primaryKey:true
    },
    Password:{
        type:Datatypes.STRING,
        allowNull:false
    }
})

Passwords.belongsTo(Login,{
    foreignKey:{
        allowNull:false
    }
});

db.sync({alter:true}).then(()=>{
    console.log("logintable working")
}).catch((err)=>{
    if(err) throw err;
})
exports.module={
    Login,Passwords
}



//MY SQL Code Previously used
//// const Sequelize=require('sequelize')
// // const datatypes=Sequelize.DataTypes
// const mysql2=require('mysql2');
// const loginconfig=require("../database_config.json")
//
// const localconfig={
//             host:loginconfig.DB.HOST,
//             user:loginconfig.DB.USER,
//             password:loginconfig.DB.PASSWORD,
//             database:loginconfig.DB.DATABASE
//                 }
// // const db=new Sequelize(localconfig.database,localconfig.user,localconfig.password,{
// //     host:localconfig.host,
// //     dilect:mysql
// // })
// //
// // const LoginUser=db.define('loginuser',{
// //     userId:
// // })
//
// exports.logincheck=function (user,cb) {
//     const connection=mysql2.createConnection(localconfig);
//     //LIKE - QUEry
//     //CHECK RESULTS IF not empty then user exist else
//     //redirect to sign up page
//     connection.query(
//         "SELECT * FROM loginuser WHERE username=? AND password=?"
//         ,[user.username,user.password],
//         (err,result,fields)=>{
//             if(err) throw err;
//              //check for null
//                 cb(result);
//         }
//     )
// }
//
// // exports.loggedin=function (user) {
// //
// // }
//
//
//
// exports.signup=function (customer,cb) {
//     const connection=mysql2.createConnection(localconfig);
//     connection.query(
//         "INSERT INTO loginuser(username,password) VALUES(?,?)",
//         [customer.username,customer.password],//Check for where clause
//         (err,rows)=>{ //Its adding the string but we want the values
//             if(err) throw err;
//             console.log(rows);
//             cb(rows);
//         }
//     )
// }
//
// //()=>{
// //                 connection.query("Insert into loginsecurity(squestion,sanswer)")
// //             }