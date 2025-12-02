import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200,{"content-type":'text/plain'})
  res.end('Hello World');
});


server.on('request', (req, res) => {
  console.log('Request received:', req.url);
});

server.on('connection', () => {
  console.log('A new connection was made.');
});

server.on('close', () => {
  console.log('Server closed.');
});

server.listen(3000);