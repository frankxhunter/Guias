# Tutorial and tips of javascript by Frank

## Infinite scrolling

Permite cargar nuevos elementos cuando el scroll llego al fondo

`
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    // Cargar más contenido
    loadMoreContent();
  }
});
`

## Tipos de eventos del mouse

### mousedown/mouseup

Se oprime/suelta el botón del ratón sobre un elemento.

### mouseover/mouseout

El puntero del mouse se mueve sobre/sale de un elemento.

### mousemove

Cualquier movimiento del mouse sobre un elemento activa el evento.

### click

Se activa después de mousedown y un mouseup enseguida sobre el mismo elemento si se usó el botón.

### dblclick

Se activa después de dos clicks seguidos sobre el mismo elemento. Hoy en día se usa raramente.

### contextmenu

Se activa al pulsar el botón derecho del ratón. Existen otras formas de abrir el menú contextual, por ejemplo: usando un comando especial de teclado también puede activarse, de manera que no es exactamente un evento exclusivo del mouse.

## Metodos de array en javascript

```js
- unshift(e) //agrega un elemento al inicio del array
- splice(i, n) //i es la posicion a partir de la cual se comienza a borrar y n la cant de elementos a borrar

```
