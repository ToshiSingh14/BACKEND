const user = {
    username : "Toshi",
    age : 19
}

const http =require("http");
//console.log(http);
const server = http.createServer((req, res) => {
    const url =new URL (req.url, `http://${req.headers.host}`) ;
    const method = req.method;
    const pathname = url.pathname;

    if(method === "GET" && pathname === "/user"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(user));
    }
});
server.listen(3000, ()=>{
    console.log("Server is running on port http://localhost:3000");
});