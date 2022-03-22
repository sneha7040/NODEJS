//******************fs curd operation ********************** */
 //1. create a folder nama sneha
 //2. create a file in it named bio.txt
 //3. add motre data into the file at the end of the exixting data
 //4. read the data without getting the buffer dat aat first
 //5. rename the file mybio.txt
 //6. now delete the both file and folder
 

 const fs = require("fs");

//  fs.writeFileSync("bio.txt","my name is sneha mondal.");

//  fs.appendFileSync("bio.txt"," my age is 22.i am pursing computer science .i am studying in camellia institute of technology.");

// // const buffer_data=fs.readFileSync("bio.txt");
// // const original_data=buffer_data.toString();
// // console.log(original_data);

// const data  = fs.readFileSync("bio.txt","utf8");
// console.log(data);

// fs.renameSync("bio.txt","mybio.txt");

// fs.rmdirSync("sneha");
fs.unlinkSync("bio.txt");
fs.rmdirSync("sneha");

