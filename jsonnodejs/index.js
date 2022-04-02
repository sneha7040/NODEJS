// const { fstat } = require("fs");
const fs = require("fs");

const biodata = {
    name:"sneha",
    age :21,
    stream:"computer science"
};
// console.log(biodata);

// const jsonData = JSON.stringify(biodata);
// console.log(jsonData.stream);

// const obj_data = JSON.parse(jsonData);
// console.log(obj_data.stream);

const jsonData=JSON.stringify(biodata);
fs.writeFile("json1.json",jsonData, (err)=>{
console.log("done");
// console.log(err);
});

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});
