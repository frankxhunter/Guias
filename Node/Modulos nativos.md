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

### statSync

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
