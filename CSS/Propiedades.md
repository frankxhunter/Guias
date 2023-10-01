# Propiedades

## Text

### letter-spacing
```letter-spacing: normal; ```
```letter-spacing: 1px; ```
```letter-spacing: -1px; ```

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
## Position
Determina la forma en la que sera posicionado el elemento, la posicion final esta determinada por las propiedades top, rigth, left, bottom,
o inset como abreviatura

### Static
``` position: static; ```
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


## Border-box
Especifica como se debe calcular el ancho y el alto total de un elemento

### content-box

``` box-sizing: content-box; ```

Esta es la propiedad q viene por defecto 

Especifica que el tamaño del borde se sumara al ancho y largo de la caja


### border-box

``` box-sizing: content-box; ```

Especifica que el borde de la caja se tomara en cuenta en el momento de calcular en ancho y largo de la caja
