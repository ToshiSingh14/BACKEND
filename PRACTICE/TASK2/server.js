// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//   fs.appendFile(
//     'log.txt',
//     `${new Date().toISOString()} | ${req.method} | ${req.url}\n`,
//     console.error
//   );

//   res.end('Logged');
// }).listen(3000);


const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const url = new URL (req.url,`http://${req.headers.host}`);
    const pathname = url.pathname;
    const method = req.method;

    const newlog = new Date().toISOString()+"-"+method+"-"+req.url+"\n";
        fs.appendFile('log.txt',newlog,(err)=>{
            if(err){
                res.writeHead(500,"Cannot write");
                return res.end();
            }
            
        })
        res.writeHead(200,"Created");
        res.end();
})

server.listen(3000,()=>{
    console.log("Server running at port 3000");
})