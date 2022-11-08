// console.log("Hey Virendra Good Evening !");

import http from "http";
const PORT = process.env.PORT || 8000;

const host = "localhost";

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.end("Response From Server !");
});
server.listen(PORT,host,()=>{
    console.log(`Server is listening on http://localhost:8000.`);
});