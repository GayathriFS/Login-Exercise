const express=require("express")
const { waitForDebugger } = require("inspector")

const app=express()

var uname="priya"
var pass="123"
app.get("/name",function(req,res)
{ 
    console.log(req.query.username);
    console.log(req.query.password);
    if(uname === req.query.username && pass === req.query.password)
    {
        res.send("Login successful")
    }
    else{
        res.send("Login Failed")
    }
  
})

app.get("/",function(req,res)
{
    res.send("Enter name,age,address")
})

app.listen(5000,function()
{
    console.log("server started");
    
})



