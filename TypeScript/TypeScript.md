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

Debido a que typescript es un super set de JavaScript para hacer esta transformación bastará con cambiar la extensión del archivo de .js a .ts

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

### Como pasar una funcion por parametros

```ts

// ❌ Esta forma es incorrecta ya que admitira cualquier tipo de funcion 
const sayHiFromFunction= (hi) =>{
    return hi("hola");
}

function hi (hola: string){
    console.log(hola.toUpperCase());
}

sayHiFromFunction(hi) 

// ✔ En esta forma se indica los parametros de la funcion a recibir evitando errores de es forma

const sayHiFromFunction2= (hi2: (hola: string)=> void) =>{
    return hi("hola");
}

function hi2 (hola: string){
    console.log(hola.toUpperCase());
}
// ✔ Se llama una funcion que cumple con las condiciones
sayHiFromFunction2(hi2) 

// ❌ Esta funcion no cumple las condiciones por tanto se marcara un error 
sayHiFromFunction2(Math.random())
```

### Arrow Functions

Esta son las dos formas poner tipado a las funciones flecha

```ts
// Formas de tipar las arrow functions

// 1
const add = (a: number, b: number) => {
    return a + b
}

// 2 
const sub: (a: number, b: number)=> number = (a, b)=>{
    return a-b;
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

## Any, Void, Null, Undefined, never

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

### Never

El "never" se utiliza principalmente para las funciones donde se indica que una funcion nunca va a retornar nada

- El caso mas utilizado es para las funciones que lanzan error

- En la mayoria de caso no es de vital importancia su uso

```ts
function error(message: string): never{
  throw new Error(message);
}
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

> [!CAUTION]
> Un array vacio sin especificar el tipo se considerara como de type never

Como definir un array con varios tipos

```ts
const languajes: (string | number)[] = []

languajes.push("Spanish")
languajes.push(3)

//❌
languajes.push(true)
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

>[!TIP]
>Las tuplas y los arrays se pueden combinar para obtener un "Map":

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

### Como pasar objetos por parametros

```ts
// ❌ Esta forma es incorrecta pq esto en js es un renombramiento
function saludar({name: string , age: number}){
  console.log(`El nombre es ${name} y la edad es ${edad}`)
}

// 👀 exiten otras formas de hacer esto 

// ✔ 1ra forma de marcar los tipos
function saludar({name , age}: {name: string, age: number}){
  console.log(`El nombre es ${name} y la edad es ${edad}`)
}
// ✔ 2da forma de marcar los tipos
function saludar(persona {name: string, age:number}){
  const {name, age} = persona;
  console.log(`El nombre es ${name} y la edad es ${edad}`)
}

```

## Enum

Los enum representan valores fijos o constantes

```ts
  enum DAY{
    MONDAY,
    THUESDAY,
    WEDNESDAY,
    THURDAY,
    FRIDAY,
    SATURDAY, 
    SUNDAY
  }
  
  const lunes = DAY.MONDAY;


// numerical enum
enum GameLevel {
  A = 1,
  B = 2,
  C = 3,
}

let firstLevel: GameLevel = GameLevel.A;

console.log(firstLevel);
// 1

// Otra forma de enum es con el operador OR aplicable en los type

  type Raza = "chino" | "blanco" | "negro"

  let persona: Raza = "chino";

  // Esto tambien es aplicable a los tipos de datos
  // Conocido como union de tipos o UNION TYPE

  let valor: string | number ;

  valor = "hola"
  valor = 123;
  // ❌ 
  valor = false;


  // tambien pueden ser valores especificos

  let valores : "Hola"| 2
  valores = "Hola"
  valores = 2

  // ❌ 
  valores = 3
  valores = "aDIOS"

```

## Type aliases

Esto tipos se utilzan como alias de otros tipos

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

### Alias con objetos

```ts
// Types for objects

type Hero = {
    name: string, 
    age: number,
    superpower?: string,
  }
  
  const batman: Hero= {
    name: "batman",
    age: 22,
  }


  function hiHero(hero: Hero): string{
      const superpower = hero.superpower?.trim
      //--------------------------------? esto detecta que la propiedad es opcional y por tanto 
      // no lo ejecuta si la propiedad no existe
    return `Hola soy ${hero.name} tengo ${hero.age} años 
    ${superpower ? "y mi super poder es " + superpower: ""}`
  }

  // Como mantener el encapsulamiento de los alias y usar alias anidados

// Usar alias anidados
  type HeroId= `${string}-${string}-${string}-${string}-${string}`
  type Hero2 = {
    // Mantener el encapsulamiento de los alias
    readonly id: HeroId
    name: string, 
    age: number,
    superpower?: string,
  }

  function createHero(name: string, age: number, superpower?: string): Hero2{
    const id = crypto.randomUUID();
    return {id: id, name: name, age: age, superpower: superpower};
  }
  const thor: Hero2 = createHero("thor", 22, "its rich")
  // ❌ El id no se puede modificar
  //hero.id = 2;
  console.log(thor.id)
```

### Type interceptions

Las interceptiones de tipos permiten usar combinaciones de varios tipos

```ts
  // Interception Types   
  type HeroId= `${string}-${string}-${string}-${string}-${string}`
  type HeroPropierties = {
    readonly id: HeroId
    superpower?: string,
  }

  type HeroBasicInfo = {
    name: string, 
    age: number,
    superPower?: string;
  }
  // Se interceptan dos tipo para crear el tipo final 
  type Hero = HeroPropierties & HeroBasicInfo;

  function createHero(input: HeroBasicInfo): Hero{
    const {name, age, superPower} = input;
    const id = crypto.randomUUID();
    return {id: id, name: name, age: age, superPower: superPower};
  }
  const thor: Hero = createHero({name:"thor", age:22, superPower:"its rich"})
```

### Indexing Types

Esto permite utilizar partes de tipos que tengas para defenir otros tipos

```ts


  type Hero = {
    name: string,
    age: number,
    address : {
      planet: string,
      city: string
    }
  }

  // Aqui solo uso una parte del Hero
  type miniHero = Hero["address"]
  
  const batman: miniHero = {
    planet: "eart",
    city: "New York",

    // ❌
    name: "batman"
  }
  // En TS el operador typeOf  tiene mas funcionalidad
  type pequehero = typeof batman;

```

### Aserciones de Tipos

Una asercion de tipo consiste en decirle al compilador que tipo de dato es el que va a recibir

```ts
//-----------------------------------------------Aqui se usa la asercion
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

canvas.getContext("2d")
```

>[!NOTE]
> Esta no es la forma correcta de utilizar un elemento del html ya que puede tener errores de validacion

```ts
// Forma correcta 
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

if(canvas != null && canvas instanceof HTMLCanvasElement){
    canvas.getContext("2d")
}
```

#### Ejemplo de como hacer fetch en TS usando aserciones

>[!NOTE]
> Para hacer await en un TS el archivo tiene que usar Commonjs Exports o cambiar el tipo de fichero de .ts a .mts

```ts
// file.mts



const API_URL =  "https://api.github.com/search/repositories?q=javascript"

// Para obtener la respuesta de la api tipada de debe crear los tipos usando la pagina QuickType con la respuesta
// type GitHubResponse = respuesta obtenida de QuickType

const response = await fetch(API_URL);  

if(!response.ok){
    throw new Error("Request failed")
}

const data = await response.json() as GitHubResponse

const result = data.items.map((repo)=>{
    return {
        name: repo.name,
        id: repo.id,
        url: repo.url
    }
})

console.log(result);
```

## 3 en Raya

A continuacion un pequeño ejemplo uso de Types, array y Tuplas

```ts
// Ejemplo de array con el 3 en rayas

// Paso 1: Definir los valores en que pueden ir en cada posicion
type Cellvalue = "" | "X" | "O";

// Paso 2: Definir la estructura de el tablero de juego en Tuplas
type GameBoard = [
    [Cellvalue, Cellvalue, Cellvalue],
    [Cellvalue, Cellvalue, Cellvalue],
    [Cellvalue, Cellvalue, Cellvalue],
]

// Paso 3: Crear tu 3 en raya
const gameBoard: GameBoard = [
    ["O", "X", "O"],
    ["O", "", "O"],
    ["O", "X", "O"]
]
```

## Narrowing

Es un concepto que consiste en cuando puede recibir dos tipos de datos y vas a usar una propiedad que solo tiene uno de esos datos

La solucion se basa en validar lo que recibes

```ts
function saludar(word: string| number): void{
     word.length //❌ puede ser string o number, y number no tiene esta propiedad
    if(typeof word == "string"){
        console.log(word.length); 
    }
    else{
        console.log(word);
    }
}
```

Ejemplo mas complejo de narrowing utilizando types y interfaces

```ts
interface Mario{
    name: string,
    saltar: ()=> void
}

interface Sonic{
    name: string,
    correr: ()=> void
}

type Character = Mario | Sonic

function play(character: Character){
   // character.correr(); // ❌ No sabemos si es mario o Sonic

   // Para validar que tipo de personaje seria, debemos usar un type Guard
    if(checkIsSonic(character)){
        character.correr();
    }
    else if (checkIsMario(character)){
        character.saltar();
    }
    else{
        // Ejemplo de un never
        character
    }
}

// Type Guard - validar que el personaje tenga las propiedades que queremos
function checkIsSonic(character: Character): character is Sonic{
    // Comprobar la propiedad discriminadora de sonic
    return (character as Sonic).correr !== undefined;
}
function checkIsMario(character: Character): character is Mario{
    // Comprobar la propiedad discriminadora de sonic
    return (character as Mario).saltar !== undefined;
}

```
