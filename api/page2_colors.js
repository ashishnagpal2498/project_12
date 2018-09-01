//This Js
const express=require('express');
const path=require('path');
const route=express.Router()
const Catelog=require('../Db_cart/models').models.Colourcatelog
const Style=require('../Db_cart/models').models.Heelstylecatelog

route.post('/',(req,res)=>{
    Catelog.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        if (err) throw err
    })
})

route.post('/:id',(req,res)=>{
    Style.findAll({
        where:{colourcatItemid:req.params.id}
    },{returning:true}).then((result)=>{
        res.send(result)
    }).catch((err)=>{if(err) throw err})
})

// route.get('/blue',(express.static(path.join("./","public_static","page2"))))
// route.use('/black',(req,res)=>{
//     res.sendFile(path.join("../","public_static","page2","Black.html"))
// })
// //C:\Users\iamth\WebstormProjects\WebDPractiseMarch18\oct_05home\public_static\page2\Black.html
// route.get('/brown',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public_static","page2","Brown.html"))
// })
// route.get('/gold',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public_static","page2","Gold.html"))
// })
// route.get('/green',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public_static","page2","Green.html"))
// })
// route.get('/lightblue',(req,res)=>{
//     res.sendFile(path.join("public_static","page2","LightBlue.html"))
// })
// route.get('/lightpink',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public_static","page2","LightPink.html"))
// })
// route.get('/orange',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public_static","page2","Orange.html"))
// })
// route.get('/purple',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public_static","page2","Purple.html"))
// })
// route.get('/white',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public_static","page2","White.html"))
// })
// route.use('/yellow',express.static((path.join(__dirname,"public_static","page2","Yellow.html"))))
exports.route=route;









// Items inserted values
//Catelog.bulkCreate([{
//     colour:'blue',
//     price:500,
//     imagepath:"../Files/Sample/blue.jpg"
// },{
//     colour:'black',
//     price:500,
//     imagepath:"../Files/Sample/Black.jpg"},
//     {
//     colour:'brown',
//     price:500,
//     imagepath:"../Files/Sample/brown.jpg"}
//     , {
//         colour:'gliter',
//         price:500,
//         imagepath:"../Files/Sample/Gliter.jpg"}
//         ,{
//         colour:'gold',
//         price:500,
//         imagepath:"../Files/Sample/Gold.jpg"}
//         ,{
//         colour:'green',
//         price:500,
//         imagepath:"../Files/Sample/Green.jpg"}
//         ,{
//         colour:'lightblue',
//         price:500,
//         imagepath:"../Files/Sample/Lightblue.jpg"}
//         ,{
//         colour:'lightpink',
//         price:500,
//         imagepath:"../Files/Sample/Lightpink.jpg"}
//         ,{
//         colour:'orange',
//         price:500,
//         imagepath:"../Files/Sample/orange.jpg"}
//         ,{
//         colour:'purple',
//         price:500,
//         imagepath:"../Files/Sample/purple.jpg"}
//         ,{
//         colour:'red',
//         price:500,
//         imagepath:"../Files/Sample/red.jpg"}
//         ,{
//         colour:'yellow',
//         price:500,
//         imagepath:"../Files/Sample/yellow.jpg"}
//
//     ])


//Images path files
//Style.bulkCreate([{
// imagespatharray:["../Colors/brown/br1.jpg","../Colors/brown/br2.jpg","../Colors/brown/br3.jpg","../Colors/brown/br4.jpg","../Colors/brown/br5.jpg","../Colors/brown/br6.jpg","../Colors/brown/br7.jpg","../Colors/brown/br8.jpg","../Colors/brown/br9.jpg"],
//     colourcatItemid:3
// },{
//     imagespatharray:["../Colors/gold/g1.jpg","../Colors/gold/g2.jpg","../Colors/gold/g3.jpg","../Colors/gold/g4.jpg","../Colors/gold/g5.jpg","../Colors/gold/g6.jpg","../Colors/gold/g7.jpg","../Colors/gold/g8.jpg","../Colors/gold/g9.jpg"],
//         colourcatItemid:5
// },{
//     imagespatharray:["../Colors/white/w1.jpg","../Colors/white/w2.jpg","../Colors/white/w3.jpg","../Colors/white/w4.jpg","../Colors/white/w5.jpg","../Colors/white/w6.jpg","../Colors/white/w7.jpg","../Colors/white/w8.jpg","../Colors/white/w9.jpg"],
//         colourcatItemid:4
// },{
//     imagespatharray:["../Colors/green/gr1.jpg","../Colors/green/gr2.jpg","../Colors/green/gr3.jpg","../Colors/green/gr4.jpg","../Colors/green/gr5.jpg","../Colors/green/gr6.jpg","../Colors/green/gr7.jpg","../Colors/green/gr8.jpg","../Colors/green/gr9.jpg"],
//         colourcatItemid:6
// },{
//     imagespatharray:["../Colors/lightblue/b1.jpg","../Colors/lightblue/b2.jpg","../Colors/lightblue/b3.jpg","../Colors/lightblue/b4.jpg","../Colors/lightblue/b5.jpg","../Colors/lightblue/b6.jpg","../Colors/lightblue/b7.jpg","../Colors/lightblue/b8.jpg","../Colors/lightblue/b9.jpg"],
//         colourcatItemid:7
// },{
//     imagespatharray:["../Colors/Lightpink/p1.jpg","../Colors/Lightpink/p2.jpg","../Colors/Lightpink/p3.jpg","../Colors/Lightpink/p4.jpg","../Colors/Lightpink/p5.jpg","../Colors/Lightpink/p6.jpg","../Colors/Lightpink/p7.jpg","../Colors/Lightpink/p8.jpg","../Colors/Lightpink/p9.jpg"],
//         colourcatItemid:8
// },{
//     imagespatharray:["../Colors/orange/o1.jpg","../Colors/orange/o2.jpg","../Colors/orange/o3.jpg","../Colors/orange/o4.jpg","../Colors/orange/o5.jpg","../Colors/orange/o6.jpg","../Colors/orange/o7.jpg","../Colors/orange/o8.jpg","../Colors/orange/o9.jpg"],
//         colourcatItemid:9
// },{
//     imagespatharray:["../Colors/purple/pr1.jpg","../Colors/purple/pr2.jpg","../Colors/purple/pr3.jpg","../Colors/purple/pr4.jpg","../Colors/purple/pr5.jpg","../Colors/purple/pr6.jpg","../Colors/purple/pr7.jpg","../Colors/purple/pr8.jpg","../Colors/purple/pr9.jpg"],
//         colourcatItemid:10
// },{
//     imagespatharray:["../Colors/Red/r1.jpg","../Colors/Red/r2.jpg","../Colors/Red/r3.jpg","../Colors/Red/r4.jpg","../Colors/Red/r5.jpg","../Colors/Red/r6.jpg","../Colors/Red/r7.jpg","../Colors/Red/r8.jpg","../Colors/Red/r9.jpg"],
//         colourcatItemid:11
// },{
//     imagespatharray:["../Colors/yellow/y1.jpg","../Colors/yellow/y2.jpg","../Colors/yellow/y3.jpg","../Colors/yellow/y4.jpg","../Colors/yellow/y5.jpg","../Colors/yellow/y6.jpg","../Colors/yellow/y7.jpg","../Colors/yellow/y8.jpg","../Colors/yellow/y9.jpg"],
//         colourcatItemid:12
// }])