const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
const routes={
    login:require('./api/login').route,
    signup:require('./api/signup').route,
    page2:require('./api/page2_colors').route,
    reviewitem:require('./api/reviewitem').route
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())



app.use('/login',routes.login); //Login page
app.use('/signup',routes.signup); //Signup page + Database storage
app.use('/page2',routes.page2)
app.use('/reviewitem',routes.reviewitem)
app.use('/',express.static(path.join(__dirname,'public_static')))

app.listen(2222,()=>{ console.log("SERVER HAS STARTED at @localhost:2222")});