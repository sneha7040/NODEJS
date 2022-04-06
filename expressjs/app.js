const express = require("express");

const app = express();
const port = 3000;
// app.get(route,callback);
app.get("/", (req, res) => {
  res.status(200).write("<h1>this is my home page</h1>");
  res.status(200).write("<h1>this is my againhome page</h1>");
  res.send();
});
app.get("/about", (req, res) => {
  res.status(200).send("this is about page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("this is my contact page");
});

app.get("/temp", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: "sneha",
      age: 21,
      stream: "computer science",
      college: "camellia institute of technology",
    },

    {
        id: 1,
        name: "sneha",
        age: 21,
        stream: "computer science",
        college: "camellia institute of technology",
      },

      {
        id: 1,
        name: "sneha",
        age: 21,
        stream: "computer science",
        college: "camellia institute of technology",
      },

      {
        id: 1,
        name: "sneha",
        age: 21,
        stream: "computer science",
        college: "camellia institute of technology",
      }
  ]);
});


app.get("/temp", (req, res) => {
    res.status(200).json([
      {
        id: 1,
        name: "sneha",
        age: 21,
        stream: "computer science",
        college: "camellia institute of technology",
      },
  
      {
          id: 1,
          name: "sneha",
          age: 21,
          stream: "computer science",
          college: "camellia institute of technology",
        },
  
        {
          id: 1,
          name: "sneha",
          age: 21,
          stream: "computer science",
          college: "camellia institute of technology",
        },
  
        {
          id: 1,
          name: "sneha",
          age: 21,
          stream: "computer science",
          college: "camellia institute of technology",
        }
    ]);
  });


  //the method are identical when an object or array is passed, but res.json() will also convert non object, such as null and undefined which are not valid JSON.

app.listen(port, () => {
  console.log(`listen the port ${port}`);
});
