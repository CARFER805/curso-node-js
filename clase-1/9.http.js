/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('node:http');
const { findAvailablePort } = require('../clase-1/10.free-port');

const desiredPort = process.env.PORT ?? 3000;
const server = http.createServer((req, res) => {
  console.log('request received');
  res.end('Hola mundo');
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `server listening on port http://localhost:${server.address().port}`
    );
  });
});
