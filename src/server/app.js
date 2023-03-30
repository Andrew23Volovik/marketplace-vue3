const http = require('http');
const { products } = require('./data');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE',
    'Access-Control-Max-Age': 2592000,
  };

  if (req.url === '/products') {
    res.writeHead(200, headers);
    res.end(JSON.stringify(products));
    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
