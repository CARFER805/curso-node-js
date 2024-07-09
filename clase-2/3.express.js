const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
  res.send('<h1>Mi pagina</h1>');
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});

app.post('/pokemon', (req, res) => {
  let body = '';

  // escuchar el evento data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    res.status(201).json(data);
  });
});
