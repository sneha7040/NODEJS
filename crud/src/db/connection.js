const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  }).then(() => console.log("connection succesful"))
  .catch((err) => console.log("no connection"));

