# Propiedades

## Box Model  

Propiedades q modifican los estilos de las cajas

### Width-Height  

```CSS
width: auto; //Define el ancho, auto es por defecto
height: auto; //Define el alto, auto es por defecto

max-width: 500px;
max-height: 500px;

min-width: 100px;
min-height: 100px;
```

### Overflow

La propiedad abreviada de CSS(overflowX y OverflowY) establece el comportamiento deseado cuando el contenido no cabe en el cuadro del elemento principal (se desborda) en dirección horizontal y/o vertical

```CSS
/* Keyword values */
overflow: visible; //
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

**visible**
El contenido desbordado no se recorta y puede ser visible fuera del cuadro de relleno del elemento. El cuadro de elementos no es un contenedor de desplazamiento . Este es el valor predeterminado de la overflow propiedad.

**hidden**
El contenido desbordado se recorta en el cuadro de relleno del elemento. No hay barras de desplazamiento y el contenido recortado no es visible (es decir, el contenido recortado está oculto), pero el contenido aún existe.

**clip**
El contenido desbordado se recorta en el borde del recorte de desbordamiento del elemento definido.

**scroll**
El contenido desbordado se recorta en el cuadro de relleno del elemento y el contenido desbordado se puede desplazar para visualizarlo mediante barras de desplazamiento.

**auto**
 A diferencia de scroll, los agentes de usuario muestran barras de desplazamiento solo si el contenido está desbordado y ocultan las barras de desplazamiento de forma predeterminada.

**Nota**: El valor de la palabra clave overlayes un alias de valor heredado para auto. Con overlay, las barras de desplazamiento se dibujan encima del contenido en lugar de ocupar espacio.

#### Como darle estilo a la barra

Para estilizar la barra de desplazamiento en CSS, puedes utilizar las siguientes propiedades:

1. **scrollbar-width y scrollbar-color**: Estas propiedades permiten personalizar el ancho y el color de la barra de desplazamiento en navegadores que admiten la especificación. Por ejemplo:

    ```css
    /* Establecer el ancho de la barra de desplazamiento */
    scrollbar-width: thin;
    /* Establecer el color de la barra de desplazamiento */
    scrollbar-color: red yellow;
    ```

2. **::-webkit-scrollbar**: Esta pseudo-clase te permite personalizar la apariencia de la barra de desplazamiento en navegadores basados en WebKit, como Chrome y Safari. Puedes utilizar varias propiedades para cambiar su apariencia, como width, height, background-color y border-radius. Por ejemplo:

    ```css
    /* Establecer el ancho y color de fondo de la barra de desplazamiento */
    ::-webkit-scrollbar {
    width: 10px;
    background-color: #f1f1f1;
    }

    /* Establecer el color del pulgar (parte móvil de la barra de desplazamiento) */
    ::-webkit-scrollbar-thumb {
    background-color: #888;
    }

    /* Establecer el color del fondo al pasar el ratón por encima de la barra de desplazamiento */
    ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    }
    ```

scrollbar-width: thin: Esta propiedad establece el ancho de la barra de desplazamiento en navegadores que admiten la especificación. Puedes ajustar el valor según tus necesidades.

### Margin

```CSS
margin-top: auto //Establece un tamaño de margen superior.
margin-left: auto //Establece un tamaño de margen a la izquierda.
margin-right: auto //Establece un tamaño de margen a la derecha.
margin-bottom: auto //Establece un tamaño de margen inferior.
margin: 100px; //Establece todos los margenes comunes
```

**Nota**: Existe un truco muy sencillo y práctico para centrar horizontalmente un elemento en pantalla. Basta con aplicar un ancho fijo al contenedor: width: 500px (por ejemplo) y luego aplicar un margin: auto.

- Observese también el siguiente ejemplo para ilustrar el solapamiento de márgenes. Por defecto, si tenemos dos elementos adyacentes con, por ejemplo, margin: 20px cada uno, ese espacio de margen se solapará y tendremos 20px en total, y no 40px (la suma de cada uno) como podríamos pensar en un principio:
![Ilustracion del solapamiento de margenes](https://lenguajecss.com/css/modelo-de-cajas/box-sizing/margin-collapse.png)

 **Nota**: aunque al principio puede resultar muy tentador utilizar márgenes negativos (para ajustar posiciones y colocar los elementos visualmente), se aconseja no utilizar dicha estrategia salvo para casos muy particulares. Para colocar elementos, lo mejor es aprender las bases del tema de maquetación, con estrategias como flexbox o grid.

### Padding

```CSS
padding-top:0 //Aplica un relleno interior en el espacio superior de un elemento.
padding-left:0 //Aplica un relleno interior en el espacio izquierdo de un elemento.
padding-right:0 //Aplica un relleno interior en el espacio derecho de un elemento.
padding-bottom:0 //Aplica un relleno interior en el espacio inferior de un elemento.
padding: 100px; //Establece todos los rellenos comunes
```

### Border

Para establecer el borde de un elemento

```css
border-color: black //Especifica el color que se utilizará en el borde.
border-width: thin | medium | thick //Especifica un tamaño predefinido para el grosor del borde. Tambien se puede establecer en ``px``
border-style: none //Define el estilo para el borde a utilizar (ver más adelante).

//Atajo
border: border-width border-style border-color;
//Ejemplo
border: 1px solid blue

//Atajo por zonas
border-top: Propiedad de atajo para bordes superiores.
border-right: Propiedad de atajo para bordes derechos.
border-bottom: Propiedad de atajo para bordes inferiores.
border-left:  de atajo para bordes izquierdos.
 ```

#### Border Style

Establece el estilo del borde del elemento, exiten diferentes atributos:

1. hidden: Oculto.Idéntico a none, salvo para conflictos con tablas.
2. dotted: Establece un borde basado en puntos.
3. dashed: Establece un borde basado en rayas (línea discontínua).
4. solid: Establece un borde sólido (línea contínua).
5. double: Establece un borde doble (dos líneas contínuas).
6. groove: Establece un borde biselado con luz desde arriba.
7. ridge: Establece un borde biselado con luz desde abajo. Opuesto a groove.
8. inset: Establece un borde con profundidad «hacia dentro».
9. outset: Establece un borde con profundidad «hacia fuera». Opuesto a inset.

![Grafica de los estilos de bordes](https://lenguajecss.com/css/modelo-de-cajas/bordes/border-styles.png)

#### Bordes Multiples

Hasta ahora, sólo hemos utilizado un parámetro en cada propiedad, lo que significa que se aplica el mismo valor para cada borde de un elemento (borde superior, borde derecho, borde inferior y borde izquierdo). Sin embargo, podemos especificar uno, dos, tres o cuatro parámetros, dependiendo de lo que queramos hacer:

Esto es aplicable a todos los valores de borde y al atajo

```css
border-color 
1 parámetro.    Aplica el mismo color a todos los bordes.
2 parámetros.   Aplica al borde top/bottom, y al left/right.
3 parámetros.   Aplica al top, al left/right y al bottom.
4 parámetros.   Aplica al top, right, bottom y left.
```

### Border radius

Permite redondear las esquinas

```css
border-radius   
1 parámetro. Aplica el radio a todas y cada una de las esquinas.
2 parámetros: top-left + bottom-right y a top-right + bottom-left.
3 parámetros: top-left, a top-right y bottom-left y a bottom-right.
4 parámetros. Orden de las agujas del reloj, empezando por top-left.

//Ejemplo 
  border-radius: 25px;              /* 1 parámetro */
  border-radius: 25% 50%;           /* 2 parámetros */
  border-radius: 50px 25px 10px;    /* 3 parámetros */
  border-radius: 25px 0 15px 50px;  /* 4 parámetros */

```

### Border-image

Esta propiedad se utiliza para establecer imagenes como bordes, a continuacion un ejemplo simple de como usarla pero como no es comun en caso de necesitarla investigar mas al respecto [Border Imagenes](https://lenguajecss.com/css/modelo-de-cajas/bordes-imagenes/#atajo-bordes-con-im%C3%A1genes)

```css
 width: 200px;
  border: 42px solid black;
  border-image-width: 42px;
  border-image-source: url(https://i.imgur.com/YC5PUl6.png);
  border-image-slice: 110;
  border-image-outset: 0px;
  border-image-repeat: repeat;

```

### Box-sizing

Especifica como se debe calcular el ancho y el alto total de un elemento

#### content-box

``` box-sizing: content-box; ```

Esta es la propiedad q viene por defecto

Especifica que el tamaño del borde se sumara al ancho y largo de la caja

#### Border-box

``` box-sizing: content-box; ```

Especifica que el borde de la caja se tomara en cuenta en el momento de calcular en ancho y largo de la caja

## Background

### background-color

```background-color: black;```

### Backgound-imagen

CSS te proporciona la propiedad background-image, con la cuál puedes indicar imágenes de fondo o, como veremos más adelante, incluso gradientes o degradados de varios colores.

```css
background-image: none              No utiliza ninguna imagen de fondo.
background-image: url("imagen.jpg") Usa la imagen indicada como fondo.
background-image: gradient          Utiliza un gradiente de tipo lineal, radial o cónico.
```
**Nota**: para ver mas de gradientes ir a la seccion gradientes en (Gradientes)[]

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
