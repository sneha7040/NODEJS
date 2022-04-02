// crud operation 

const fs = require("fs");

// fs.writeFile("animation.txt","Animation is the process of creating the illusion of motion",(err)=>{
//     console.log("file is created");
//     console.log(err);
// });





// fs.appendFile("animation.txt","and shape change by means of the rapid display of a sequence of static images that minimally differ from each other. Animation is all around us, be it your favourite tv commercials, music, movies or even videos you can see the stop motion animation type. Movement creation techniques incorporate the conventional traditional animation and stop motion animation techniques of two and three-dimensional figures, for example, paper set patterns, puppets and clay figures. Keeping Stop motion as the base of all animation, differe",(err)=>{
//     console.log("append is done sucesfully");
//     console.log(err);
// });


// fs.rename("animation.txt","multimedia.txt",(err)=>{
//     console.log(err);
// });


fs.readFile("multimedia.txt","utf-8",(err,data)=>{
   
    console.log(err);
    console.log(data);
});