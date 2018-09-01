
function imageitem(data) {
  let imageId=$(data).attr('data-imageid')
    console.log(imageId)
    $.post(`/page2/${imageId}`,{imageId:imageId},(data)=>{
        console.log(data);
        let imagesarray=data[0].imagespatharray
        console.log(imagesarray);
        let divimages=$('#colourcontent')
        divimages.empty();
        for(item of imagesarray){
            let divitem=$(` <div class="col-sm-5 col-md-3 mt-3 ml-1 mb-3 abc" data-itempath="${item}" ><form method="post" action="/reviewitem" ><img src=${item} height="100%" width="100%"><input type="submit" value="Add to cart" name="${item}" ></form></div>`)
            divimages.append(divitem)
        }     //onclick="finalizeprod(this)"
        let divimageheading=$('#colourhead')
        divimageheading.empty()
        divimageheading.append('Choose Your style');


    })

    //console.log(data);
}

function finalizeprod(val) {
    console.log(val);

}


$(function () {
    $.post('/page2/',(data)=>{
        let divimages=$('#colourcontent')
        divimages.empty()
        console.log(data);
        for(item of data){
         let divitem =   $( `<div onclick="imageitem(this)" class="col-sm-5 col-md-3 ml-1 mb-3 mt-3" data-imageid='${item.itemid}' ><img src='${item.imagepath}' height="100%" width="100%"><span> ${item.colour} High Heels</span></div>`)
          divimages.append(divitem)
        }
    })
        //By using this selection hoga ki kis image par kiya hai
        //Now wt we have to do is make a generic function such that Jab hum kisi image par click kare
    //toh vo back end mein 1 post request bhejega and return mein usse 1 object milega
    //append that set of objects in place of these images.......
    //Toh aise jo bhi style choose karenge karte rahe
    //2) Reached to last stage of styling ....... Abb Final product review hoga
    //Jiske andar i need to show the product image , name price size quantity - Add to cart
    //3) Cart - Local storage mein rehti hai
    //"../Colors/Black/black1.jpg;../Colors/Black/black2.jpg;../Colors/Black/black3.jpg;../Colors/Black/black4.jpg;../Colors/Black/black5.jpg;../Colors/Black/black6.jpg;../Colors/Black/black7.jpg;../Colors/Black/black8.jpg;../Colors/Black/black9.jpg;"
   // ../Colors/Black/black6.jpg;../Colors/Black/black7.jpg;../Colors/Black/black8.jpg;../Colors/Black/black9.jpg;"
    let previousbtn=$('#prevpage')
    previousbtn.click(()=>{
        window.location='/page2'
    })

})
// <div class="col-sm-5 col-md-3 ml-1 mb-3 mt-3"><img src="../Files/Sample/blue.jpg" height="100%" width="100%">
//         <a href="/page2/blue">Blue High Heels</a></div>
//     <div class="col-sm-5 col-md-3 ml-1 mb-3 mt-3"><a href="/page2/black"> <img src="../Files/Sample/Black.jpg" height="100%" width="100%">
//         Black High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mb-3 mt-3" id="pinkheel"><img src="../Files/Sample/Lightpink.jpg" height="100%" width="100%">
//         <a href="LightPink.html">Light Pink High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mb-3 mt-3"><img src="../Files/Sample/Gold.jpg" height="100%" width="100%">
//         <a href="Gold.html">Gold High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/Gliter.jpg" height="100%" width="100%">
//         <a href="White.html">White High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/red.jpg" height="100%" width="100%">
//         <a href="../Red.html">Red High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/Green.jpg" height="100%" width="100%">
//         <a href="Green.html">Green High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/Brown.jpg" height="100%" width="100%">
//         <a href="Brown.html">Brown High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/Lightblue.jpg" height="100%" width="100%">
//         <a href="LightBlue.html">Lightblue High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/orange.jpg" height="100%" width="100%">
//         <a href="Orange.html">Orange High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/purple.jpg" height="100%" width="100%">
//         <a href="Purple.html">Purple High Heels</a></div>
//     <div class="col-sm-6 col-md-3 ml-1 mt-3 mb-3"><img src="../Files/Sample/yellow.jpg" height="100%" width="100%">
//         <a href="Yellow.html">Yellow High Heels</a></div>
//
