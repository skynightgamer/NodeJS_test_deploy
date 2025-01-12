const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 443; // Standard HTTPS port

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/www.codylon.de/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.codylon.de/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/www.codylon.de/chain.pem'),
};

app.get('/', (req, res) => {
  res.send('Hello, Secure World!');
});

https.createServer(options, app).listen(port, () => {
  console.log(`Secure server running on https://www.codylon.de`);
});
