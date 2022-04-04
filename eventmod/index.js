// const event = require('events');
// const EventEmitter = new event.EventEmitter();

const EventEmitter = require("events");
const event = new EventEmitter();



// event.on("sneha", () => {
//   console.log("my name is sneha");
// });

// event.on("sneha", () => {
//     console.log("my name is Mondal");
//   });()

// event.emit("sneha");

event.on("checkpage",(sc,msg)=>{
console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkpage", 200, 'ok');

