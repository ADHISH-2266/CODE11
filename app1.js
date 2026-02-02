const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("this is from send")
})

app.listen(3000,()=>{
    console.log("the port is running 3000");
})