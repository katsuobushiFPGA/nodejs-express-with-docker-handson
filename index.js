const http = require('http');
const express = require('express');

const app = express();

app.get("/", function(req, res){
    return res.send("Hello World");
});

const server = http.createServer(app);
server.listen(3000);