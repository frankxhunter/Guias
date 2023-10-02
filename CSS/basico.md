# Notas basicas de CSS

## Unidades de medidas

En CSS, las unidades de medida son esenciales para definir tamaños, espacios, fuentes y otros aspectos del diseño de un sitio web. Existen dos tipos principales de unidades de medida: absolutas y relativas.

### Unidades de medida absolutas

* px(píxeles): Es la unidad de medida más utilizada en diseño web. Un píxel representa un punto en la pantalla y es la unidad de medida más pequeña. Sin embargo, el tamaño real de un píxel puede variar dependiendo de la resolución de la pantalla
* pt (puntos): Se utilizan principalmente en la impresión. Un punto equivale a 1/72 de una pulgada
cm (centímetros), mm (milímetros), in (pulgadas): Estas unidades representan medidas físicas y se utilizan principalmente en la impresión, no son recomendables para la web debido a las variaciones en la resolución de la pantalla

### Unidades de medida relativas

* em: Esta unidad es relativa al tamaño de la fuente del elemento actual. Por ejemplo, si el tamaño de la fuente del elemento es de 16px, entonces "1em = 16px". Se utiliza para permitir un diseño más flexible y accesible.
* rem: Similar a "em", pero en lugar de referirse al tamaño de fuente del elemento actual, se refiere al tamaño de fuente del elemento raíz (normalmente el elemento ``<html>``). Por lo tanto, "1rem" siempre será igual al tamaño de fuente inicial definido para la página.
* vh/vw (Viewport Height/Viewport Width): Estas unidades se basan en el tamaño de la ventana del navegador (viewport). "1vh" es igual al 1% de la altura del viewport, y "1vw" es igual al 1% de la anchura del viewport. Estas unidades son útiles para crear diseños responsivos que se adaptan al tamaño de la ventana del navegador.
* % (porcentaje): Esta unidad es relativa al tamaño del elemento padre. Por ejemplo, si un elemento tiene un ancho de "50%", tomará la mitad del ancho de su elemento padre.

## Colores

Formas de establecer los colores en css:

```css
    red        Establece un color mediante palabras clave.

    rgb():      Usa una función rgb() (rojo, verde y azul).B

    #rrggbb:    Notación RGB abreviada en hexadecimal. Notación recomendada.

    hsl()       Usa una función hsl() (color, saturación y brillo).

    hwb()       de color independiente del dispositivo

    lab()       Usa una función lab() y oklab() (luminosidad CIE, eje A y eje B).

    lch()    Usa una función lch() y oklch() (luminosidad CIE, saturación, color).
```

## Gradientes y degradados
