$(function () {
    let submitbutton=$('#submitbtn')
    let loginbtn=$('#loginbtn')
    submitbutton.click(()=>{
        let uservalue=$('#userinput').val();
        let passvalue=$('#pass1').val();
        console.log(passvalue);
        $.post('/login',{username:uservalue,password:passvalue},(data)=>{
            console.log(data);
            if(data[0]==null)
            {
                let wrongemail=$('#wrongemail')
                wrongemail.empty();
                wrongemail.append("Either Email or password entered is wrong")
                //append the value in the login page that value entered is incorrect
            }
            else{ //User ki Id bhejte hai Main wale page ko And through that it will access the name
                localStorage.setItem('user',uservalue);
                window.location="/"
                loginbtn.attr('data-log',`${uservalue}`)
                //data aaya hai toh vo value localstorage mein save karani h taaki original home page use kar sake
                //send the control to home page
                //home page par control jayega toh phir append value dere login ke button se
            }
        })

    })
// let fpass = $('#forgetpassword')
//     fpass.click(()=>{
//         window.location="/forgetpassword"
//     })
    let signupbtn=$('#signupbtn');
    signupbtn.click(()=>{
        window.location="/signup";
    })
})