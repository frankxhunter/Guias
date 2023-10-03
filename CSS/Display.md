# Display

La propiedad display en CSS se utiliza para controlar cómo se muestra un elemento en la página web.
Los diferentes valores de la propiedad display determinan cómo se comporta un elemento y cómo interactúa con otros elementos en el diseño de la página.

## Valores más comunes de la propiedad display y su funcionalidad

* block: Hace que el elemento se comporte como un bloque, ocupando todo el ancho disponible en su contenedor padre. Los elementos de bloque comienzan en una nueva línea y se apilan verticalmente  . Ejemplos de elementos de bloque son `<div>, <p>, <h1>-<h6>, <ul>, <ol></p>`, entre otros.

* inline: Hace que el elemento se comporte como una caja en línea, ocupando solo el espacio necesario para su contenido. Los elementos en línea no comienzan en una nueva línea y se apilan horizontalmente  . Ejemplos de elementos en línea son ``<span>, <a>, <strong>, <em>``, entre otros.
inline-block: Combina las características de los elementos en línea y los elementos de bloque. El elemento se comporta como una caja en línea, pero también puede tener un ancho y altura definidos. Los elementos en línea bloque pueden tener margen y relleno, y se apilan horizontalmente  . Ejemplos de elementos en línea bloque son ``<img>, <input>, <button>``, entre otros.

* none: Oculta el elemento y no ocupa espacio en el diseño de la página. Los elementos con display: none no se renderizan en absoluto y no son accesibles para los usuarios. Esto puede ser útil para ocultar elementos en ciertas condiciones o para crear interacciones dinámicas [1].
flex: Crea un contenedor flexible que permite distribuir y alinear los elementos secundarios de manera flexible. Es muy útil para crear diseños responsivos y de fácil alineación  . Ejemplo de uso:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

* grid: Crea un contenedor de cuadrícula que permite organizar los elementos secundarios en filas y columnas. Es una forma poderosa de crear diseños complejos y adaptables  . Ejemplo de uso:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

## Propiedades de flex

### justify-content

Esta propiedad se utiliza para alinear los elementos flexibles a lo largo del eje principal del contenedor. Puede tener los siguientes valores:

* flex-start: Los elementos se alinean al inicio del contenedor.
* flex-end: Los elementos se alinean al final del contenedor.
* center: Los elementos se alinean en el centro del contenedor.
* space-between: Los elementos se distribuyen equitativamente con espacios iguales entre ellos.
* space-around: Los elementos se distribuyen equitativamente con espacios iguales alrededor de ellos.
* space-evenly: Los elementos se distribuyen equitativamente con espacios iguales alrededor y entre ellos.

### align-items

Esta propiedad se utiliza para alinear los elementos flexibles a lo largo del eje cruzado del contenedor. Puede tener los siguientes valores:

* flex-start: Los elementos se alinean al inicio del eje cruzado.
* flex-end: Los elementos se alinean al final del eje cruzado.
* center: Los elementos se alinean en el centro del eje cruzado.
* baseline: Los elementos se alinean en la línea de base del eje cruzado.
* stretch: Los elementos se estiran para llenar el contenedor en el eje cruzado.

### flex-direction

Esta propiedad se utiliza para definir la dirección en la que se colocan los elementos flexibles dentro del contenedor. Puede tener los siguientes valores:

* row: Los elementos se colocan en una fila de izquierda a derecha.
* row-reverse: Los elementos se colocan en una fila de derecha a izquierda.
* column: Los elementos se colocan en una columna de arriba hacia abajo.
* column-reverse: Los elementos se colocan en una columna de abajo hacia arriba.

### flex-wrap

 Esta propiedad determina si los elementos deben envolverse en múltiples líneas cuando no quepan en una sola línea. Puede tener los siguientes valores:

* nowrap: Los elementos se ajustarán en una sola línea (valor predeterminado).
* wrap: Los elementos se envolverán en múltiples líneas si es necesario.
* wrap-reverse: Los elementos se envolverán en múltiples líneas, comenzando desde la última línea.

### Gap

``gap, row-gap, column-gap``: Estas propiedades controlan el espacio entre los elementos flex. La propiedad gap establece el espacio entre los elementos tanto en la dirección de las filas como en la de las columnas. La propiedad row-gap establece el espacio entre los elementos en la dirección de las filas, mientras que la propiedad column-gap establece el espacio entre los elementos en la dirección de las columnas.

### Shrink

flex-shrink: Esta propiedad determina cómo se reducen los elementos flex cuando el tamaño total de los elementos supera el tamaño del contenedor flex. Especifica el factor de reducción de un elemento flex y controla cuánto debe reducirse un elemento en relación con otros elementos. De forma predeterminada, los elementos flex tienen un valor de flex-shrink de 1, lo que significa que pueden reducirse por igual para ajustarse al contenedor. Establecer flex-shrink en 0 evita que un elemento se reduzca.
