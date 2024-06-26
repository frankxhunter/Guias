# Regex con JavaScript

En JavaScript existe el objeto RegExp, por tanto hay dos formas de crear un regexp  

```js
let pattern = /abc/;

OR

let pattern = new RegExp('abc');
```

Por tanto si quisiéramos comprobar q una variable sea de tipo RegExp haríamos lo siguiente

```js
console.log(pattern instanceof RegExp); // true
```

## Usos prácticos

Veamos métodos y usos prácticos de RegExp

### Search

El método search() permite encontrar la posición donde hay una coincidencia  

```js
let string = "learning about JS and regex";
string.search(/regex/);

// 22
```

### Replace

El método replace() permite remplazar una coincidencia en la cadena por un texto dado

```js
let string = "Visit Google!";
string.replace(/google/i, "Enki");

// Visit Enki!
```

### Test

El método test() es un método especial del objeto RegExp q permite probar si hay una coincidencia del RegExp en el texto dado, por tanto se utiliza para validar

```js
let regex = /e/;
regex.test(
"The quick brown fox jumps over the lazy dog"
);

// true

/e/.test(
"The quick brown fox jumps over the lazy dog"
);

// true
```

### Exec

Otro método especial de RegExp q devuelve las coincidencias encontradas en una cadena en un objeto, si no encuentra devuelve null

```js
const letter = /e/.exec("The dog barked.");

console.log(letter);
// [ 'e', index: 2, input: 'The dog barked.', groups: undefined ]


console.log(letter[0]);
// e

console.log(letter.index);
// 2

console.log(letter.input);
// The dog barked.
```
