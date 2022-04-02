const path = require("path");


console.log(path.dirname('C:/NODEJS3/pathmod/app.js'));
console.log(path.extname('C:/NODEJS3/pathmod/app.js'));
console.log(path.basename('C:/NODEJS3/pathmod/app.js'));

const myPath= path.parse("C:/NODEJS3/pathmod/app.js");
console.log(myPath.root);