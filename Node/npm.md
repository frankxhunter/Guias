# Node manage packge

NPM es el gestor de paquetes mas utlizado del mundo

## Como iniciar un proyecto de node con npm

Utilizar en la console la linea ```npm init``` y responder las preguntas que salen a continuacion o ```npm init -y``` y toma los valores por defecto

## Tipos de dependencias

 Existen dos tipos de dependencias principales en node:

- Produccion: como react
- Desarrollo: eslinter

## Comandos de npm

- npm i dependencia  // instala la dependecia
- npm unistall dependencia // desinstala la dependencia

## Recomendaciones

Utilizar el apartado de scripts del package.json con `npm run nameScript`

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./index.js"
  },
```

Ejemplo de uso: `npm run dev`

## Dependencias q voy usando

### Picocolors

Se utiliza para darle estilo a los mensajes en la consola

```javascript
console.log(picocolors.red("error"))
```

### standard

Es una dependencia de desarrollo para hacer eslint

#### Como configurar el eslint

```json
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    },
```

### Nodemon

Como alternativa se puede utilzar ``node --watch index.js``

Hace que el servidor se actualice automaticamente al detectar cambios en el codigo

``npm i nodemon -D`

Se recomienda usarlo como dependencia de desarrollo

Para usarlo `node nodemon index.js`
