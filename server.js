const http = require('http');
const fs = require('fs');

const PORT = 8000;

const server = http.createServer((req,res) => {
    fs.readFile('./index.html', (err, contents) => {
         res.end(contents);
    });
});

server.listen(PORT, (err) => {
    if (err){
        return console.error(err.message);
    }
    console.log(`Server is listening on port ${PORT} ... `)
});
/**
 const fs = require('fs');

https.createServer( (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);*/