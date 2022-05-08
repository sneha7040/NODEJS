const express = require("express");

const mongoose = require("mongoose");
//database connectivity
mongoose
  .connect("mongodb://localhost:27017/snehamondal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection succesful"))
  .catch((err) => console.log(err));

const app = express();
//schema define
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  classes: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now(),
  },
});

//collection creation
const snehamondal = new mongoose.model("snehadata", subjectSchema);

//create or insert document
// const createDocument = async () => {
//   try {
//     const mernPlaylist = new snehamondal({
//       name: "ruby",
//       type: "backend",
//       classes: 60,
//       author: "Sneha Mondal",
//       active: true,
//     });

//     const dbplaylist = new snehamondal({
//       name: "MongoDb",
//       type: "Database",
//       classes: 60,
//       author: "Sneha Mondal",
//       active: true,
//     });

//     const frontendplaylist = new snehamondal({
//       name: "html/css",
//       type: "frontend",
//       classes: 25,
//       author: "Sneha Mondal",
//       active: true,
//     });

//     const jsplaylist = new snehamondal({
//       name: "javascript",
//       type: "frontend/backend",
//       classes: 55,
//       author: "Sneha Mondal",
//       active: true,
//     });
//     const result = await snehamondal.insertMany([mernPlaylist, dbplaylist,frontendplaylist,jsplaylist]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createDocument();

// const showDocument = async()=>{
//   try {
//     const mernPlaylist=new snehamondal ({
//       name: req.body.name,
//       type:req.body.type ,
//       classes:req.body.classes ,
//       author: req.body.author,

//     })

//   } catch (error) {
//     console.log(error);
//   }
// }

const getDocument = async()=>{
try {
  const result=await snehamondal.find({[{author:"sneha mondal"}]}).select({name:1}).countDocument;
  console.log(result);
} catch (error) {
  console.log(error);
}

}
getDocument();



// const updateDocument = async()=>{
//   try {
//     const result=await snehamondal.update({type:"Database"},{type:"DB"});
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
  
//   }
//   updateDocument();
const port = 9000;
app.listen(port, () => {
  console.log(`running on the port no ${port}`);
  
});
