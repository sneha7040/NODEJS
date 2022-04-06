const express = require("express");

const app = express();
const port = 3000;
// app.get(route,callback);
app.get("/", (req, res)=>{
    res.status(200).send("this is my home page");
});  
app.get("/about",(req, res)=>{
    res.status(200).send("this is about page");
});

app.get("/contact",(req,res)=>{
    res.status(200).send("this is my contact page");
});


app.listen(port,()=>{
    console.log(`listen the port ${port}`);
});   







