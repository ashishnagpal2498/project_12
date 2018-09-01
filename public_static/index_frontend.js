$(function () {


    // Login button

    let loginbtn=$('#loginbtn')
   // if(loginbtn.val()=="Login/signup")
    loginbtn.click(()=>{
        window.location="/login/"
        })
    $.get('/',()=>{
console.log(loginbtn.attr('data-login'));
    })


//Page 2 switch
    let page2btn=$('#page2btn')
    page2btn.click(()=>{
        window.location="/page2/"
    })

    //Cart design
    let cartbutton=$('#cartbtn')
    cartbutton.click(()=>{
            $.post()
        //Yaha se get requset bhejenge ki user logged in hai ya nahi
        //Logged in hai toh check if there is something on the cart

    })


})
