const http = require('http');
const fs = require('fs');
const path = require("path");

const filepath = path.join(__dirname,"data.json");


const server = http.createServer((req, res) => {
   const url =new URL (req.url, `http://${req.headers.host}`) ;
   const method = req.method;
   const pathname = url.pathname;

// jab /api/data path per get request aayegi tab hume data.json file ko read karkar uss data ko response m bhejna h
    if(method==="GET"&& pathname==="/api/data"){
        fs.readFile(filepath,"utf-8",(err,data)=>{
            if (err) console.error(err);
            res.writeHead(200,{"content-type":"application/json"});
            res.end(data);
        })
    }
//clint mujhhe jab post request bheje ga /api/data path par tab wo mujhe user ja data bhejega json format m . uss data ko m pahle m request.on event listener se collect karunga ab iske baad i have to write it in data.json array m. for this i will read the data then convert it into java sting object by json.parse and user data ko bhi phir iss array m wo 
    else if(method==="POST" && pathname==="/api/data"){
        let body = "";

        req.on("data",(chunks)=>{
            body+=chunks;
        })

        req.on("end",()=>{
            const userData = JSON.parse(body);
            fs.readFile(filepath,"utf-8",(err,data)=>{
                if (err) console.error(err);
                const Data = JSON.parse(data);
                Data.push(userData);
                fs.writeFile(filepath,JSON.stringify(Data),(err)=>{
                    if (err) console.error(err);
                    res.writeHead(200,{"content-type":"application/json"});
                    res.end();
                })
            })
        })}

    
});
server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})

