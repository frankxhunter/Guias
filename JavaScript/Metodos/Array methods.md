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
