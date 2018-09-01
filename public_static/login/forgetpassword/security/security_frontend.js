// let passfile= require('../forgetpassword_frontend')

$(function () {
    let userId = localStorage.getItem('Id')
    console.log(userId);
    let securityques=$('#securityques')
    $.post('/login/forgetpassword/security',{Id:userId},(data)=>{
       window.returnuser= function () {
           return data;
       }
    })
    let submitbtn = $('#validatequestion')
    submitbtn.click(()=>{
        let securityans=$('#securityans').val()
        console.log(securityans);
        let User=returnuser();
        console.log(User);
        if(securityans===User.SecurityAns){
            //reset password
            window.location='/login/resetpassword'
        }
        else{
            let wrongemail = $('#wrongemail')
            wrongemail.empty();
            wrongemail.append("Answer Entered is Wrong")
        }
    })
})