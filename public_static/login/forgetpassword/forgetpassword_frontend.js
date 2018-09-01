$(function () {
    let submitbtnemail = $('#validatemail')
    submitbtnemail.click(()=>{
        let emailval=$('#userinput').val()
        $.post('/login/forgetpassword',{username:emailval},(data)=>{ console.log(data)
            if(!data)
            {
                let wrongemail = $('#wrongemail')
                wrongemail.empty()
                wrongemail.append('Invalid Email , Try again')
            }
            else
            // {   exports ={Id:data.Id}
            {

                //data would have come so storing that id on localStorage
                console.log('ab'+data.Id)

                window.location='/login/forgetpassword/security'
            }
        })

    })

})

