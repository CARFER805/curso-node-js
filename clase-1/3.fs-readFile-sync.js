// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('node:fs');

console.log('Leyendo el primer archivo....');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log('primer texto:', text);

console.log('̣̣________________>Hacer cosas mientras lee el archivo....');

console.log('Leyendo el segundo archivo....');
const secondtext = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log('segundo texto:', secondtext);
