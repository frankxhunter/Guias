# Sintaxis Markdown

Markdown es un lenguaje de marcado ligero que se utiliza para formatear y estructurar texto sin formato. Es ampliamente utilizado en plataformas como GitHub, Stack Overflow y diversas aplicaciones de blogging para crear contenido de manera fácil y rápida. A continuación, se describe la sintaxis básica de Markdown:

## Encabezados

Los encabezados se crean utilizando uno o más símbolos de almohadilla (#) al principio de una línea. Cuantas más almohadillas, más pequeño es el encabezado. Por ejemplo:

```markdown
# Encabezado 1 crea un encabezado de primer nivel

## Encabezado 2 crea un encabezado de segundo nivel

### Encabezado 3 crea un encabezado de tercer nivel
```

Y así sucesivamente.

## Párrafos y saltos de línea

Los párrafos se crean dejando una línea en blanco entre ellos. Además, un salto de línea simple se puede lograr agregando dos espacios al final de una línea. Por ejemplo:
Este es un párrafo.

```md
 `Este es otro párrafo.`
 `Este es un salto de línea.`
 ```

## Énfasis

Para enfatizar palabras o frases, se pueden utilizar asteriscos (*) o guiones bajos (_) alrededor del texto. Por ejemplo:

```markdown
*énfasis* o *énfasis* se muestra como énfasis

**negrita** o **negrita** se muestra como negrita.
```

## Listas

Se pueden crear listas numeradas o con viñetas utilizando números o símbolos +, -, o*. Por ejemplo:

```md
Listas numeradas:
     1. Primer elemento
     2. Segundo elemento
     3. Tercer elemento
Listas con viñetas:
     - Elemento 1
     - Elemento 2
     - Elemento 3
```

## Enlaces

Los enlaces se crean utilizando corchetes [] para el texto del enlace y paréntesis () para la URL del enlace. Por ejemplo:

```md
[Texto del enlace](https://www.ejemplo.com) se muestra como Texto del enlace.
Imágenes: Las imágenes se insertan utilizando un formato similar al de los enlaces, pero con un signo de exclamación (!) al principio. Por ejemplo:
![Texto alternativo](ruta/de/la/imagen.jpg) muestra una imagen con un texto alternativo.
```

## Bloques de código

Para resaltar bloques de código, se puede utilizar triple comillas invertidas (```) al principio y al final del bloque de código.

## Avisos de sintaxis especial


> [!NOTE]
> Esto es una nota q resalta visualmente
```md
> [!NOTE]
> Esto es una nota q resalta visualmente
```

> [!TIP]
> Esto es un tip o una ayuda al lector
```md
> [!TIP]
> Esto es un tip o una ayuda al lector
```

> [!WARNING]
> Esto es un aviso que debes leer
```md
> [!WARNING]
> Esto es un aviso que debes leer
```

> [!CAUTION]
> Cuidado!! esto es importante
```md
> [!CAUTION]
> Cuidado!! esto es importante
```

> [!IMPORTANT]
> Ojo con esto, que es muy importante
```md
> [!IMPORTANT]
> Ojo con esto, que es muy importante
```

