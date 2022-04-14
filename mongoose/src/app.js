const express = require("express");
const req = require("express/lib/request");
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
      type:String,
      require:true
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
const snehamondal = new mongoose.model("snehadata",subjectSchema);

//create or insert document
const createDocument = async()=>{
     try {
         const mernPlaylist=new snehamondal ({
              name: "ruby",
              type:"backend" ,
              classes:60 ,
              author: "Sneha Mondal",
              active: true
            }) 

            const dbplaylist=new snehamondal ({
                name: "MongoDb",
                type:"Database" ,
                classes:60 ,
                author: "Sneha Mondal",
                active: true
              }) 
        const result = await snehamondal.insertMany([mernPlaylist, dbplaylist]);
        console.log(result);
        } catch (error) {
         console.log(error);
     }
};

const showDocument = async()=>{
  try {
    const mernPlaylist=new snehamondal ({
      name: req.body.name,
      type:req.body.type ,
      classes:req.body.classes ,
      author: req.body.author,
    
    })

  } catch (error) {
    console.log(error);
  }
}

createDocument();
const port = 8000;
app.listen(port, () => {
  console.log(`running on the port no ${port}`);
});
