const express = require("express");
require("../src/db/connection.js");
const rank = require("../src/models/schema.js");
const app = express();
const port = process.env.PORT||3000;

app.get("/",async(req,res)=>{
   res.send("hello");
});

app.post("/schema",async(req,res)=>{
    try {
      const addRank=new rank({
        name:"kurti",
        type:"silk",
        quantity:5,
        designer:"sneha mondal",
        active:true
      })
      addRank.save();  
    } catch (error) {
       console.log(error); 
    }
});

app.listen(port, () => {
  console.log(`running on the port no ${port}`);
  
});