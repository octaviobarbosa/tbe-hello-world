const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {  
  const url = req.url;

  if(url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end("Initial page!");
  } else if( url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end("Hello World!");
  } else if( url === '/test') {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end("isso é um teste");
  }  
});


server.listen(port, hostname, () => {
  console.log(`🚀 Server is up on http://${hostname}:${port}`)
})