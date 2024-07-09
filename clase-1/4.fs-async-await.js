//Esto solo en los modulos nativos 
//que ni tienen promesas nativas

//const {promisify} = require('node:util')
//const readFilePromise = promisify(fs.readFile) 

const { readFile } = require('node:fs/promises');

// ESTO ES UNA IIFE - Inmediatly Functtion Expression
( async ()=>{
    console.log('Leyendo el primer archivo....')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('primer texto:',text)

    console.log('̣̣________________>Hacer cosas mientras lee el archivo....')

    console.log('Leyendo el segundo archivo....')
    const secondtext = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto:',secondtext)
}
)()

