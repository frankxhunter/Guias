# Regex

Los regex son patrones que se utilizan para encontrar coincidencias en textos

En muchos lenguajes de programación suelen encerrarse entre **//**

Por ejemplo

`/fre/` =
**fre**
**fre**el
em**fre**tel

## Cuantificadores

Los Cuantificadores permiten encontrar coincidencias sin conocer el número exacto de veces q se repite

- `/abc{2}/` = La c se repite 2 veces

- `/abc{2,4}/` = La c se repite entre 2 y 4 veces

- `/abc?/` = La c puede o no estar en el patron

- `/abc*/` = La c se repite 0 o más veces veces

- `/abc+/` = La c se repite 1 o más veces

## Wildcards

Se utilizan para añadir flexibilidad cuando tú no sabes q carácter hay

Por ejemplo el ``.`` se utiliza para representar cualquier carácter así q podríamos hacer esto

-`/ab.*/` =
**abc**
**abdf**
**abfirigiriggie#(€(&**

La siguiente se utiliza para representar cualquier carácter alfanumérico

- `/\w/` =
**e**
**4**
**G**

Si quieres hacer match con todo el string alfanumérico podrías usar

- `/\w*/`

También existe:

- `/\W/`
Q sería lo puesto a la anterior, osea, todos los caracteres no alfanuméricos

- Ejemplo para encontrar todos los nombres que comiencen con Fra:

`/Fra\w*/`

### Otras Wildcards

- `/\s/` = Hace match con todos los espacios en blanco, tabulaciones, saltos de línea.
- `/\S/` = Lo contrario, todos los no espacios en blanco

- `/\d/` = Todos los digitos
- `/\D/` = Todos los no dígitos

## Escaped Character

Como el ``.`` es un palabra reservada de Regex, q significa cualquier carácter excepto el salto de linea, no se puede utilizar literalmente.
Para esto se debe utilizar un Escaped carácter q consta de ``\`` más el carácter

- ``/ab\./`` = **ab.**

- ``/.+\./`` = **djfkf_('(€.**

También con el propio *Slash* o *backslash*:

- ``/\/http/`` = **/http**

- ``/\\miPC\\localSpace/`` = **\miPC\localSpace**

## Range

Los rangos son semejantes a las Wildcards, es decir son formas de hacer que coincida con cualquiera de los caracteres deseados, pero la diferencia es q en este caso, tú defines los caracteres q deseas q coincidan. por ejemplo:

- **Nota** para definir un rango se pone entre corchetes []

- ``/[Fra]gh/`` =
**fgh**
**rgh**
**agh**
Pero no coincidirá con:
**mgh**
**kgh**
**xgh**

**Nota** también podemos usar ''-'' para definir rangos, por ejemplo:

- ''/[0-9]/'' son todos los dígitos equivalente a ''\d''

- ''/[a-z]/'' equivalente a todas las letras en minúscula

- ''/[a-zA-Z0-9_]/'' todos los caracteres alphanumericos o ''\w''

## Range 2

Al igual q pasaba con las Wildcards, podemos usar lo contrario de los valores en el rengo, para esto se usa ''^'', por ejemplo:
- ''/[^1-3]/'' sería cualquier carácter excepto del 1 al   

# Grouping 
Es posible usar paréntesis para agrupar los elementos 
como por ejemplo:


''/regex(es)?/'' = 

**regex**
**regexes**

''(abc)+'' =

**abc**
**abcabcabcabcabc** 

También existe el operador or ''|''

''/ab(c|d)?/'' =

ab
abc
abd

''/reg(ular expressions|exp?)/'' =

**regular expresions**
**regex**
**regexp**