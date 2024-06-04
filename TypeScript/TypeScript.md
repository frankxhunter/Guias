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

## Types

Para definir los tipos se utiliza ":" por ejemplo:

```ts
let brand: string = "Samsung";
brand = "Apple";
brand = `Enki`;
```

Los tipos básicos más usados son:

- number
- string 
- boolean

## Los tipos en las funciones

Typescript nos permite definir los tipos de parámetros de una función 

```ts
function hello(name: string) {
//                 ^^^^^^^^
  console.log(`Hello ${name}!`);
}

hello("Enki");
// "Hello Enki!"

hello(123);
// error: Argument of type 'number' is not assignable to parameter of type 'string'.

```

También se lanzará un error si se envían el número incorrecto de parámetros 

```ts 
function hello(
  name: string,
  emoji: string
) {
  console.log(`${name} ${emoji}!`);
}

hello("Enki", "👋");
// "Enki 👋!"
hello("Enki");
// error: Expected 2 arguments, but got 1.
```

También es posible definir el tipo de retorno de una función 

```ts
function hello(name: string): string {
//                          ^^^^^^^^
  return `Hello ${name}!`;
}

const greeting = hello("Enki");

console.log(greeting);
// "Hello Enki!"
```
Esto nos protege también de retornar el tipo incorrecto

```ts 
function hello(name: string): string {
  return 123;
  // error: Type '123' is not assignable to type 'string'
}
```

## Protección de funciones

Por defecto todos los para.etros de las funciones son requiridos u obligatorios
pero se puede modificar esto:

```ts
function hello(
  name: string,
  emoji?: string // optional
) {
  console.log(`${name} ${emoji}!`);
}

hello("Enki", "👋");
// "Enki 👋!"
hello("Enki");
// "Enki undefined!"
```

Es posible usar parámetros por defecto

```ts
function hello(
  name: string,
  emoji: string = "💚"
//              ^^^^^^ default value
) {
  console.log(`${name} ${emoji}!`);
}

hello("Enki", "👋");
// "Enki 👋!"
hello("Enki");
// "Enki 💚!"
```
*Nota*: cuando usamos parámetros por defecto o es necesario el "?" ya q automáticamente este se vuelve un parámetro por defecto



