const express = require('express');
const app = express();//app is a backend application

app.get("/",(req,res)=>{
    res.send("Welcome to my Trent's backend application")
})// forward slash means that context root of the aplication, or the url

app.get("/trent",(req,res)=>{
    res.send("Hello Trent")
})

app.listen(3000,()=>{
    console.log("Listening")
})