
// let optiondiv= document.getElementById('securequesoptions');
// console.log(optiondiv)
// function displayoptions() {
//     optiondiv.style.display="block";
//
// }
function emptyfields(){
    let usernamevalue = $("input[name='username']").val()
    if(usernamevalue===null)
    {
        let emptyuser=$('#emptyuser')
        emptyuser.empty();
        emptyuser.append(`<p style="color: red">field empty*</p>`)
    }
}
$(function () {

//     let optiondiv=$('#securequesoptions')
//     let optionbtn=$('#optionbtn')
//
// window.options = function(){
//
//         optiondiv[0].style.display="block";
//     }
//
//     window.selectedopt = function (element) {
//         console.log(element);
//         optiondiv[0].style.display="none";
//         let selectedoptiondiv=$('#selectedopt');
//         selectedoptiondiv.empty();
//         console.log(element.explicitOriginalTarget.data)
//         selectedoptiondiv.append(`<i id="optionbtn" onclick="options()"  class="btn fa fa-arrow-up"></i>`+element.explicitOriginalTarget.data)
//     }

    window.fieldscheck=function () {
        let usernamevalue = $("input[name='username']").val()
        console.log(usernamevalue)

    }

})