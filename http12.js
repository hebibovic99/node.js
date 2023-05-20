const http = require("http")

const server = http.createServer((req,res) => {
    if (req.url === "/") {
        res.end("Welcome to our homepage")
    }

 })


//res.write("Welcome to our homepage")
//res.end

server.listen(5000)