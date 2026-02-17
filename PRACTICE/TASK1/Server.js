const http = require("http");
const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname,"notes.json");

const server = http.createServer((req,res)=>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const method = req.method;

    if(method==="GET" && pathname=="/notes"){
        fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500,"cannot read");
                res.end("ERROR");
                return;
            }
            res.writeHead(200,{"content-type":"application/json"});
            res.end(data);
        })
    }

    else if(method ==="POST" && pathname === "/notes"){
        let body ="";

        req.on("data",(chunks)=>{
            body += chunks;
        })

        req.on("end",()=>{
            fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500,"cannot read");
                res.end("ERROR");
                return;
            }
           else{
            const newNotes = JSON.parse(body);
            const notes = JSON.parse(data);
            notes.push(newNotes);

            fs.writeFile(filepath, JSON.stringify(notes) , (err)=>{
                if(err){
                    res.writeHead(500,"cannot write");
                    res.end();
                }
                else{
                    res.writeHead(200,"new note added");
                    res.end(); 
                }
            })
           }
        })

        })
    }
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})