# TypeScript

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

## Any, Void, Null, Undefined

### Any

 En caso de que no sepas el tipo de datos de una variable puede usar "any":

```ts
let anythingReally: any = 1;
anythingReally = "one";
anythingReally = [true, false];
```

### Void

Para especificar que la función no retorna nada

```ts
function enki(): void {
  return "enki";
  // error: Type '"enki"' is not assignable to type 'void'
}
```

### Null y Undefined

Representan la falta de valor y cada uno tiene su tipo propio

```ts
let zilch: undefined = undefined;
let isEqualToNull: null = null;
```

## Array y Tupple

### Array

Hay dos formas de definir un array en typescript

```ts
// by putting the [] after the type
// here we define an array of numbers
let primes: number[] = [2, 3, 5, 7];

// or by wrapping the type in the Array type
// here we define an array of strings
let powerRangerColors: Array<string> = [
  "red",
  "black",
  "yellow",
  "blue",
  "pink",
];

let nums: number[] = [1, 2, 3];
nums.push("enki");
// error: Argument of type '"enki"' is not assignable to parameter of type 'number'

// all valid
let nums: number[] = [];
let words: string[] = [];
let bools: boolean[] = [];
// ...
```

### Tuple

Una tupla es como array pero solo puede contener el número de elementos indicados, con el tipo de elemento indicado en cada posición

```ts
// numAndBoolTuple has a number at the first position
// and a boolean at the second position
let numAndBoolTuple: [number, boolean] = [
  1,
  true
];

/*The order of the types must be exact:*/

// this is an error because we're storing
// the types in the wrong order
let numAndBoolTuple: [number, boolean] = [
  true, // error: Type 'true' is not assignable to type 'number'
  1, // error: Type 'number' is not assignable to type 'boolean'
];
```

Las tuplas y los arrays se pueden combinar para obtener un "Map":

```ts
// powerRangers is an array of tuples
// where each tuple is a string pair
// representing the color and name
// of each power ranger
const powerRangers: Array<
  [string, string] // <-- tuple
> = [
  ["red", "Jason"],
  ["black", "Zach"],
  ["yellow", "Trini"],
  ["blue", "Billy"],
  ["pink", "Kimberly"],
];

// create a map out of an array of tuples
const powerRangersMap = new Map(
  powerRangers
);

console.log(
  powerRangersMap.get("blue") // "Billy"
);
```

## Objetos en typescript

Existen 3 formas de crear objetos en typescript:

*Nota*: Un objeto es una colección de pares llaves e informacion

```ts
// Forma 1. {}
let empty: {} = {};

const Enki: {
  job: string;
  isFun: boolean;
} = {
  job: "teach",
  isFun: true,
};

empty.name = "oops";
// error: Property 'name' does not exist on type '{}'
Enki.age = 5;
// error: Property 'age' does not exist on type '{ job: string; isFun: boolean; }'

///////////////////////////////////////////////////////

// Forma 2. object

// an object is an "object"
let obj: object = { enki: true };
// an array is an "object"
let arr: object = [1, 2, 3];
// a map is an "object"
let map: object = new Map([
  ["enki", "cool"]
]);
// ...
// primitive values aren't an "object"
let str: object = "enki"; // error
let num: object = 3; // error
let n: object = null; // error
let u: object = undefined; // error

///////////////////////////////////////////////////////

// Forma 3. Object

// Este causa mas confusion por puede ser cualquier cosa que contenga un valor


// almost anything is an "Object"
let num: Object = 3;
let bool: Object = false;
let str: Object = "enki";
let arr: Object = [1, 2, 3];
// ...
// only null and undefined
// give an error
let n: Object = null; // error
let u: Object = undefined; // error
```

## Enum

Los enum representan valores fijos o constantes

```ts
// numerical enum
enum GameLevel {
  A = 1,
  B = 2,
  C = 3,
}

let firstLevel: GameLevel = GameLevel.A;

console.log(firstLevel);
// 1
```

## Type aliases

Esto tipos se utilsan como alias de otros tipos

```ts
// alias string type as Language
type Language = string;

// alias boolean type as Fun
type Fun = boolean;

// now we can use the aliases
let lang: Language = "TypeScript";
let fun: Fun = true;

type NameAndFactTuple = [
  string,
  string
];

let enki: NameAndFactTuple = [
  "Enki",
  "Is a friendly learning coach",
];

let morgan: NameAndFactTuple = [
  "Morgan Freeman",
  "Should narrate my life",
];
```
