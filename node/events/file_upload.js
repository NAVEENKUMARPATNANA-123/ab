import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    const fileStream = fs.createWriteStream('./events');

    req.pipe(fileStream);

    fileStream.on('finish', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(' File uploaded successfully!');
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2> Upload File</h2>
      <form action="/upload" method="POST" >
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    `);
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));