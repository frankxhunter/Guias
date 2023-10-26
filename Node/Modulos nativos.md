# Modulos nativos que tiene node.js

## OS

Este es un modulo que brinda informacion sobre la nuestra computadora

```javascript
const os = require('node:os')
//import os from `node:os` // En caso de que estuvieras usando .mjs
console.log('Informacion del sistema')
console.log(`---------------------`)
console.log(`Nombre del sistema operativo ${os.platform()}`)
console.log(`Version del sistema operativo ${os.release()}`)
console.log(`Arquitectura: ${os.arch()}`)
console.log(`CPUs:`, os.cpus())
console.log(`Memoria libre: ${os.freemem() /1024 *2}`)
console.log(`Memoria total: ${os.totalmem() /1024 *2} `)
console.log(`Tiempo de encendido: `, os.uptime())
```

## fs: file-System

Este es uno de los modulos mas importantes de node.js y por tanto de los mas utilizados

Brinda acceso al sistema de archivo de la computadora

### Metodos de fs

#### statSync

Muestra algunas informaciones sobre el archivo en cuestion

Esto funciona de manera syncrona

```javascript
const fs = require(`node:fs`)

const stats = fs.statSync(`./archivo.txt`);

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size//tamaño en bytes,
)
```

Esto tiene usos mas complejos, investigar mas al respecto

#### readdir

Devuelve una lista de los ficheros q hay en esa direccion

```javascript
fs.readdir(`.`,(err, file)=>{
    if(err){
        console.log("Error reading file:", err);
    }
    else{
        console.log(file)
    }
})
```

### Para leer el contenido de un archivo

Esto tbien funciona de forma syncrona, lo cual significa q no va a seguir hasta terminar lo q esta haciendo

```javascript
const fs = require(`node:fs`)

const text = fs.readFileSync(`./archivo.txt`, `utf-8`)

console.log(text) 
```

### Leyendo archivos de forma asyncrona

*Nota:* Se recomienda mas usar promesas, ver siguiente apartado

```javascript
const fs = require(`node:fs`)

fs.readFile(`./archivo.txt`, `utf-8`, (err, text) => {
    console.log(text)
})

fs.readFile(`./archivo2.txt`, `utf-8`, (err, text) => {
    console.log(text)
})

console.log("Haciendo otros procesos mientras se leen los archivos...") 
```

### Usando promesas /promises

```javascript

const fs = require(`node:fs/promises`)
// Se agrega /promises y luego se usan las promesas

fs.readFile(`./archivo.txt`, `utf-8`).then((text) => {
    console.log(text)
})

fs.readFile(`./archivo2.txt`, `utf-8`).then((text) => {
    console.log(text)
})

console.log("Haciendo otros procesos mientras se leen los archivos") 
```

### Como hacerlo usando await

Por defecto el con Commojs no se puede usar `await` pero exiten dos soluciones para esto:

- Usar un archivo EnmaScript:

```javascript
//index.mjs
import { readFile } from 'node:fs/promises';

const text = await readFile(`./archivo.txt`, `utf-8`)

console.log("Primer texto:", text);

const text2 = await readFile(`./archivo2.txt`, `utf-8`);

console.log(text2);

console.log("Haciendo otros procesos mientras se leen los archivos") 
```

- Autoinvocar una funcion `async`:

```javascript
//index.js
const fs = require(`node:fs/promises`);

// IIFE - Inmediatly Invoked Function Expresion
(
    async () => {
        const text = await fs.readFile(`./archivo.txt`, `utf-8`)

        console.log("Primer texto:", text);

        const text2 = await fs.readFile(`./archivo2.txt`, `utf-8`);

        console.log(text2);

        console.log("Haciendo otros procesos mientras se leen los archivos")
    })()
```

### Como paralelizar varias promesas

```javascript
//index.js
const fs = require(`node:fs/promises`);

Promise.all([
    fs.readFile(`./archivo.txt`, `utf-8`),
    fs.readFile(`./archivo2.txt`, `utf-8`)
]).then(([text, text2])=>{
    console.log(text, text2)
})

console.log("Ejecutando otro proceso....")
```

## Path

Sirve para manejar las rutas de archivos

```javascript
const path = require(`node:path`);

console.log(path.sep) //Muestra la barra separadora segun tu sistema

//Para unir una ruta de un archivo
const filepath = path.join(` content`, `subfolder`, `test.txt`);

console.log(filepath)

// Conseguir a partir de una ruta el nombre del fichero
const base = path.basename(`/tmp/user-secrets/password.txt`);
const base2 = path.basename(`/tmp/user-secrets/password.txt`, `.txt`); 
console.log(base)

//Conseguir la extension de un archivo
const extension = path.extname(`/tmp/user-secrets/password.txt`)
console.log(extension)
```
