
const express=require("express");
const bodyparser=require("body-parser")
const app=express();
const router=require("./router/routes")
const port=4000;
app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())
app.use('/',router)
app.listen(port,()=>{
    console.log("post number 4000")
})