// REPL
// 1. js Expression
// 2. use variable
// 3. Multiline Code/loop
// 4. use (_) to get the last result
// 5. we can use editor mode

// creating a new file
const fs = require("fs");

fs.writeFileSync("read.txt", "hello world");
fs.writeFileSync("read.txt", "hello India");

//append the message in file
fs.appendFileSync("read.txt"," hello world");

//file from file
const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();

console.log(org_data);

// Node.js includes as additionaal data type called buffer
// which is not present in JavaScript 
// buffer mainly store binary data
// while reading from a file or receiving packet over the internet.

fs.renameSync("read.txt","readwrite.doc");