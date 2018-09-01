$(function () {
    let resetbutton=$('#resetsubmit')
    resetbutton.click(()=>{
        let newpassword = $('#password').val()
        let repassword=$('#repassword').val()
        let userId = localStorage.getItem('Id')
        if(newpassword===repassword){
            $.post(`/login/forgetpassword/${userId}`,{newpassword:newpassword},(data)=>{
                            if(data){
                                alert('Password changed successfully');
                                window.location='/login'
                            }

            })
        }
        else {
            let mismatch=$('#mismatch')
            mismatch.empty();
            mismatch.append("Password Mismatch")
        }
    })
})