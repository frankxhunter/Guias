#TypeScript
 Typescript es un super set de JavaScript que añade tipos opcionales, es decir con typescript puedes hacer todo lo q normalmente harías con JavaScript y además añadir tipos a tus variables para ser más estricto 

## Primeros pasos

Para disponer debe de TS debes ejecutar el siguiente comando

```sh
npm install -g typescript
```

**Nota**: los archivos typescript won aquellos con extension .ts

## Como convertir entre JS y TS

### De JS a TS

Debido a que typescript es un super set de JavaScript para hacer esta transformación bastará con cambiar la extensión del archivo de .ja a .TS

### De TS a JS

Para hacer esto es necesario usar el compilador de TS usando el siguiente comando:

```sh
tsc archivo.ts
```

## Como ejecutar código TS

```ts
// archivo.ts
function hello(name: string) {
  console.log(`Hello ${name}!`);
}

hello("Andrei");
```

Para ejecutar TS se utiliza el comando 

```sh
ts-node archivo.ts
```

Internamente este comando lo que hace es convertir el archivo a .js y luego lo ejecuta con Node

