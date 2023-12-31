# Instroduccion al curso de node.js

## Que es node.js?

Node.js es un entorno de desarrollo para compilar javascript sin necesidad de usar el navegador

Tiene una arquitectura basado en eventos

Node.js es monohilo, osea q ejecuta una sola cosa a la vez

## Por que aprender node?

- Es muy demandado

## Como ejecutar un archivo javascript con node js

Para hacer esto se debe abrir la consola y en la ruta del archivo y escribir:

```node index.js```
Esto automaticamente ejecutara este archivo

## Diferencias principales

En node al ser un entorno de ejecucion no se pueden utilizar algunas cosas como por ejemplo el objeto window

***Nota***: en solucion ha esto se creo un objeto global q funcion tanto en el navegador como en cualquier entorno de ejecucion como node.js, este objeto es `globalThis`, esto es una variable global q vamos a tener acceso en toda nuestra aplicacion
En el navegador este objeto apunta a window y en node apunta a un objeto llamado global

## Patron de diseño Commonsjs

Este patron de diseño se usa para separar los archivos en diferente archivos y no tener todo el codigo en un solo archivo

### Como exportar una variable o funcion

```javascript
function sum(x, y){
    return x+y;
}

module.exports = sum
```

### Como importarla

```javascript
const suma = require(`./sum`) //Aqui se pone la direcci

console.log(sum(1, 2));
```

### Como obligar a que un archivo sea importado con un nombre

 ```javascript
 //sum.js
function sum(x, y){
    return x+y;
}
module.exports = {sum}

//index.js

const { sum } = require(`./sum`) //Aqui se pone la direcci

console.log(sum(1, 2));
```

### Forma moderna de hacer esto utilizando Enma script

Para usar esta los archivos js deben en su lugar tener formato .mjs

*Nota*: para convertir automaticamente un archivo q tenga el import antiguo presionar `ctrl+.` en los tres punticos q salen en el require

```javascript
// sum.mjs
export function sum(x, y){
    return x+y;
}

//index.js
import {sum} from './sum.mjs'// ojo se debe usar template string
//aqui se debe poner la extension de forma obligaria
console.log(sum(1, 2));
```

*Nota*: Para importar un json se hace de la siguiente forma:

`import movies from './movies.json' assert {type: "json"}`

En el futuro se utilizara la palabra clave `with` en vez de `assert`

### Como utilizar enmascript module en los import con npm sin la extension mjs

Agregar al package.json `"type": "module",`

*2da forma:*

```javascript
import fs from 'node:fs'
const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))
```

*3ra Forma* y la mas recomendada

```javascript
// crear tu propio require
import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)
const movies= require('./movies.json')
```

## Nota adicionales

### Como convertir una funcion con callback asyncrona en una promesa

Para esto se utiliza una funcionalidad de node llamada util

```javascript
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile);

//Ahora puedes usar readFile en una promesa

```

*nota*: Solo funciona en modulos nativos q no tienen promesas nativas

### Objeto procress

Es un pbjeto q permite recibir argumentos en la linea de comandos y hacer mas cosas

```javascript
// argumentos de entrada
console.log(process.argv);

// controlo el proceso y su salida
process.exit(0) // indica que todo a salido bien
process.exit(1) // indica q algo a salido mal y se debe cerrar el proceso

// podemos controlar los eventos del proceso
process.on('exit', ()=>{
    console.log("Cerrando el programa")
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.HOLA) //relacionado con las variables de entorno
```
