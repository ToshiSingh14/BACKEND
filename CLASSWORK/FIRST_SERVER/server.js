const user = {
    username : "Toshi",
    age : 19
}
const fs =require("fs");
const http =require("http");
const server = http.createServer((req, res) => {
    const url =new URL (req.url, `http://${req.headers.host}`) ;
    const method = req.method;
    const pathname = url.pathname;

    if(method === "GET" && pathname === "/user"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(user));
    }
    else if(method === "POST" && pathname === "/data"){
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            fs.writeFile("./todo.json",body, ()=>{
                const parsed = JSON.parse(body);
                res.writeHead(201, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Data received", data: parsed}));
             
            })
            
        });
    }
});
server.listen(3000, ()=>{
    console.log("Server is running on port http://localhost:3000");
});