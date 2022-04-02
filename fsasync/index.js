const fs = require("fs");

// fs.writeFile("read.txt", "today is tuesday.",
//   (err) => {
//     console.log("file is created");
//     console.log(err);
//   });
//  we  pass them a function as an argument - a callback - get called when that task completed. the callback has an argument that tell to weather the operation completed successfully.now we need to say what to do when fs.writefile has completed an start checking error.

// fs.appendFile("read.txt"," the weather is great here.",(err)=>{
//     console.log("append the data successfully");
//     console.log(err);
// });

// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log("read the data successfully");
//     console.log(err);
//     console.log(data);
// });

// fs.rename("read.txt","weather.txt",(err)=>{
//     console.log(err);
// });

fs.mkdir("sneha2",(err)=>{
    console.log("folder is creater");
    console.log(err);
});


