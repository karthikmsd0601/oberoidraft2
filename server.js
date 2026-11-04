// Minimal static server for the People First UI redesign prototype.
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
// Hosts such as Replit provide PORT; set HOST=0.0.0.0 there (see .replit). Locally it stays on 127.0.0.1.
const port = Number(process.env.PORT || process.argv[2]) || 5180;
const host = process.env.HOST || '127.0.0.1';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let file = path.normalize(path.join(root, urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath));
    if (!file.startsWith(root) || path.basename(file) === 'server.js' || path.basename(file).startsWith('.')) {
      res.writeHead(403);
      return res.end();
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end('Not found');
      }
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(data);
    });
  })
  .listen(port, host, () => console.log(`People First redesign running at http://localhost:${port}`));
