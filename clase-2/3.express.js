const ditto = require('./pokemon/ditto.json');
const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 1234;
app.disable('x-powered-by');

app.use(express.json());
// app.use((req, res, next) => {
// if (req.method !== 'POST') return next();
// if (req.headers['content-type'] !== 'application/json') return next();

// let body = '';
// escuchar el evento data
// req.on('data', (chunk) => {
// body += chunk.toString();
// });

// req.on('end', () => {
// const data = JSON.parse(body); // convierte los datos binarios en string y los alamcena en data
// data.timestamp = Date.now();
// mutar la request y meter la informaion en el req.body
// req.body = data;
// next(); // va a intentar realizar la siguiete peticion
// });
// });

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto);
});

app.post('/pokemon', (req, res) => {
  // req.body deberiamos guardar en Base de Datos
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send('<h1>404</>');
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
