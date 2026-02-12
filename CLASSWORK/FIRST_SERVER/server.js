const http =require("http");
//console.log(http);
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (method ==="GET" && url ==="/") {
    res.writeHead(200, {"Content-Type":"text/plain" });
    res.end("Welcome to the Home Page");
}

});
server.listen(3000, ()=>{
    console.log("Server is running on port http://localhost:3000");
});