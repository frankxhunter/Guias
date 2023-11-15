# Metodos de arrays mas usados

## Map

La función map() en JavaScript es un método muy útil que se utiliza para crear un nuevo array a partir de un array existente, transformando todos sus elementos utilizando una función que se pasa como argumento12.

Por ejemplo, si tienes un array de números y quieres crear un nuevo array donde cada número se multiplica por 2, puedes usar map() de la siguiente manera:

```javascript
let numeros = [1, 5, 10, 15];
let dobles = numeros.map(function(x) {
  return x * 2;
});
// dobles es ahora [2, 10, 20, 30]
// numeros sigue siendo [1, 5, 10, 15]

```

Además, map() también puede ser útil cuando trabajas con arrays de objetos. Por ejemplo, si tienes un array de objetos donde cada objeto tiene propiedades firstName y lastName, puedes usar map() para crear un nuevo array de strings con nombres completos1:

```javascript
let usuarios = [
  {firstName: "Susan", lastName: "Steward"},
  {firstName: "Daniel", lastName: "Longbottom"},
  {firstName: "Jacob", lastName: "Black"}
];

let nombresCompletos = usuarios.map(function(elemento){
  return `${elemento.firstName} ${elemento.lastName}`;
})

console.log(nombresCompletos); // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

```

## Some

Sirve para verificar si algun elemento del array cumple con la condicion

```javascript
const numbers = [1, 2, 3, 4, 5];

// Verificar si al menos un número es mayor que 3
const result = numbers.some((number) => number > 3);

console.log(result); // Devolverá true, ya que 4 y 5 son mayores que 3

//Ejemplo practico
const filter = movies.filter( movies => movie.genre.some( g => g.toLowerCase() ===
genre.toLowerCase()))
```

## Splice

Se utiliza para añadir o elimnar elementos facilmente de un array

```javascript
// eliminar
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

meses.splice(2, 1);
console.log(meses);

// Resultado -> ["Enero", "Febrero", "Abril", "Mayo"]

// Agregar
const meses = ['Enero', 'Marzo', 'Abril', 'Mayo'];

meses.splice(1, 0, 'Febrero');
console.log(meses);

// Resultado -> ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
```
