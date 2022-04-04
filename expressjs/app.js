const express = require("express");

const app = express();
// app.get(route,callback);
app.get("/", (res, req)=>{
    res.send("hello world");
});
app.listen(8000,()=>{
    console.log("listen the port 8000");
})
