/*
HTTP respons status codfe indicate wheather a specific HTTP request has been successfully complete or not.
informational response(100-199)
successful response(200-299)
redirects(300-399)
client error(400-499)
server error(500-599)
*/ 
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("hello i am sneha");
  } else if (req.url == "/about") {
    res.end("this is about us");
  } else if (req.url == "/contact") {
      //res.write("you can contact us")
    res.end("you can contact us");
  } else {
      res.writeHead(404, {"Content-type":"text/html"});
    res.end("<h1>404!error page .page does not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("port no 8000");
});
