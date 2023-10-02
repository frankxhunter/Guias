# Propiedades

## Text

### letter-spacing

```letter-spacing: normal;```
```letter-spacing: 1px;```
```letter-spacing: -1px;```

Determina el espaciado vertical entre los caracteres de texto

### Font-weight

``` font-weight: normal; ```
Depende del font-family y cambia el espesor de la letra, se puede usar una de las siguientes propiedades:

- normal
- bold
- lighter
- bolder
O se pueden utlizar valores numericos
- font-weight: 900;

### Font-family

Para definir la tipografia

Nota: Para importar tipografias ir a google fonts poner el link en el head, y copiar lo q sale ahi

## Position

Determina la forma en la que sera posicionado el elemento, la posicion final esta determinada por las propiedades top, rigth, left, bottom,
o inset como abreviatura

### Static

``` 
position: static;
 ```
Es el posicionamiento por defecto

### Relative
``` position: relative; ```
Se desplaza segun las propiedades top, left ... pero sigue ocupando su espacio original

### Absolute
``` position: absolute; ```
Igual q en relative pero el bloque contenedor es el ancestro relativo al cual el elemento está posicionado. Si el elemento tiene márgenes, se agregarán al desplazamiento. el elemento establece un nuevo contexto de formato de bloque para su contenido

### Fixed
``` position: fixed; ```
 Se mantiene siempre en la mismo posicion sin importar el scroll

### Sticky
``` position: sticky; ```
 Es tratado como un elemento posicionado relativamente hasta que su bloque contenedor (en-US) cruza un límite establecido (como por ejemplo dando a top cualquier valor distinto de auto), dentro de su flujo principal (o el contenedor dentro del cual se mueve), desde el cual es tratado como "fijo" hasta que alcance el borde opuesto de su bloque contenedor .

## Box-sizing
Especifica como se debe calcular el ancho y el alto total de un elemento

### content-box

``` box-sizing: content-box; ```

Esta es la propiedad q viene por defecto

Especifica que el tamaño del borde se sumara al ancho y largo de la caja

### Border-box

``` box-sizing: content-box; ```

Especifica que el borde de la caja se tomara en cuenta en el momento de calcular en ancho y largo de la caja

## Box-shadow y text-shadow

Para hacerle sombras a un elemento

```CSS
box-shadow: offset-x offset-y blur-radius spread-radius color;
//Ejemplo
box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

text-shadow: offset-x offset-y blur-radius color;
//Ejemplo
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
```

### Vamos a desglosar cada uno de estos valores

- offset-x y offset-y: Estos dos valores definen la posición de la sombra en el eje horizontal (x) y vertical (y). Un valor positivo en offset-x moverá la sombra hacia la derecha del elemento y un valor negativo la moverá hacia la izquierda. De manera similar, un valor positivo en offset-y moverá la sombra hacia abajo del elemento y un valor negativo la moverá hacia arriba developer.

- blur-radius: Este valor opcional define cuánto se difuminará la sombra. Un valor de 0 hará que la sombra tenga un borde duro, mientras que un valor mayor hará que la sombra sea más borrosa y más grand

- spread-radius: Este valor opcional define cuánto se expandirá o contraerá la sombra. Un valor positivo hará que la sombra se expanda y sea más grande, mientras que un valor negativo hará que la sombra se contraiga y sea más pequeña
- color: El color 

## Outline
La propiedad outline se utiliza comúnmente para resaltar elementos cuando se enfocan o se les aplica alguna interacción.
```
 outline: outline-style outline-color outline-width;
 //Ejemplos
 outline: 2px solid blue;
 outline: none
 ```
