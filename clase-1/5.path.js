// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('node:path');

// barra separadora de carpetas segun SO
console.log(path.sep);

//Unir rutas con path.joiN
const filePacth = path.join('content', 'subfolder', 'test.txt');
console.log(filePacth);

const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base);

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(filename);

const extension = path.extname('image.jpg');
console.log(extension);
