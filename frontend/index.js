import express from 'express';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = express();

server.use(express.static(__dirname + "/public"));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.get('/pantry', (req, res) => {
  res.sendFile(__dirname + '/public/pantry.html');
});

const port = 8080;
server.listen(port, () => {
  console.log('server listening on port ' + port);
});