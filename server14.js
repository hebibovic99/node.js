const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    if (req.method === "GET") {
      res.end("About page");
    } else {
      res.statusCode = 405; // Method Not Allowed
      res.end();
    }
  } else {
    res.statusCode = 404; // Not Found
    res.end();
  }
});

server.listen(5001, () => {
  console.log("Server listening on port: 5001....");
});