# DTD

DTD es un documento que se usa para darle una estructura al documento xml, de forma que las etiquetas tengan que cumplir con unas reglas especificas, las cuales se definen tanto en el dtd como en el xsd

## Estructura de un DTD

La estructra de un DTD se base en definir las caracteristicas de las etiquetas, para esto se definen elementos en los cuales se especifica las caracteristicas de las etiquetas

```dtd
    <!ELEMENT casa (direccion,numero*,vecino?,pais?)>
    <!ELEMENT direccion (#PCDATA)>
    <!ELEMENT numero (#PCDATA)>
    <!ELEMENT vecino (#PCDATA)> 
    <!ELEMENT pais (nombre | lugar)>
    <!ELEMENT lugar (#PCDATA)>
    <!ELEMENT nombre (#PCDATA)>
```

Como se puede apreciar existen varios tipos de elementos:

### Simples

Contienen informacion elemental, como numeros o cadenas de caracteres

```dtd
    <!ELEMENT numero (#PCDATA)>
    <!ELEMENT lugar (#PCDATA)>
    <!ELEMENT nombre (#PCDATA)>
```

Pueden tener cualquiera de los siguientes valores:

- #PCDATA = indica que es texto y puede ser analizado

- #CDATA = indica que no puede ser analizado

- ANY = indica que puede contener cualquier valor

- EMPTY = indica que es un elemento vacio

*Nota* Para especificar los atributos de un elemento se deben utilizar la siguiente estructura:

```<!ATTLIST Elemento Atributo Tipo Valor```

Donde:
*Elemento* = Es el nombre del elemento el cual tendra atributo

*Atributo* = Es el nombre del atributo

*Tipo* = especifica el atributo del elemento, ver apartado siguiente

*Valor* = especifica el valor, ver siguiente apartado

#### Tipo

A continuacion se definicen los posibles tipos a definir

- CDATA = Valor alfanumérico.
- Enumeraciones = Especifica varios valores *
- ENTITY = El atributo ya está predefinido
- IDREF = Refiere a otro elemento
- IDREFS = Refiere a un conjunto (1|2|3)
- ID = Contenido único e inequívoco
- NOTATION = Con datos que no son XML
- ENTITIES = Conjunto o lista de entidades
- NMTOKENS = Con el puedes definir valor del atributo con
ciertos caracteres

#### Valor

A continuacion se definen los posbiles valores del elementos

- #FIXED = Valor fijo e inflexible
- #IMPLIED = El atributo es opcional
- #DEFAULT = El valor debe especificarse, pero no es fijo
- #REQUIRED = El atributo es obligatorio

Así, el ejemplo```<!ATTLIST nombre dni CDATA #FIXED```, implica
que el elemento nombre lleva asociado un atributo, el dni, que
se deberá escribir en un valor alfanumérico, el cual será fijo y
no se podrá modificar

### Compuestos

Contienen a otros elementos en su interior, los cuales se definen entre parentisis y separados por comas

```dtd
    <!ELEMENT casa (direccion,numero*,vecino?,pais?)>
```

#### Especificacion de cantidad

Existen varios operados para indicar cuantas veces y de que formas apareceran los elementos hijos del un elemento compuesto, estos operadores se indican despues del nombrel del elemento como vemos aqui

```dtd
    <!ELEMENT casa (direccion,numero*,vecino?,pais?)>
```

Los operados son :

- ```?``` El elemento puede aparecer 0 o 1 vez

- ```+``` El elemento aparece 1 o varias veces

- ```*``` El elemento aparece 0, 1 o varias veces

- ```|``` Se usa para indicar que se debe usar un elemento u otro

Ejemplo completo:

Archivo .dtd

```dtd
    <!ELEMENT casa (direccion,numero*,vecino?,pais?)>
    <!ELEMENT direccion (#PCDATA)>
    <!ELEMENT numero (#PCDATA)>
    <!ELEMENT vecino (#PCDATA)> 
    <!ELEMENT pais (nombre | lugar)>
    <!ELEMENT lugar (#PCDATA)>
    <!ELEMENT nombre (#PCDATA)>
```

Archivo .xml asociado al .dtd

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE casa SYSTEM "XML_with_DTD.dtd">
<casa>
    <direccion>
        Al lado de mi vecino
    </direccion>
    <numero>
        1234213
    </numero>
    <numero>
        1234213
    </numero>
    <vecino>
        she
    </vecino>
</casa>
```

*Nota* tambien existen las entidades que se utilizan para referenciar elementos prefijados en un DTD

ejemplo

```dtd
<!ENTITY email586 “1234@gmail.com”>
<!ENTITY error “Se ha producido un error en la cuenta”>
<!ENTITY alarma “Atención:”>

<suceso> &alarma; &error; &email586; </suceso>

<!--Que quedaría de la siguiente forma:-->
<suceso>Atención: Se ha producido un error en la cuenta 1234@gmail.com</suceso>
```

Es como una forma de definir constantes

Tambien existen un conjunnto de entidades existen que se pueden utilizar para referenciar algunos caracteres especiales por ejemplo:

```xml
<Texto>&lt&lt casa &gt&gt</Texto> -> << casa >>
```

## Como asocioar un .dtd con un .xml

Existen dos formas de hacerlos unas es poniendo la informacion en el propio archivo xml, esta opcion no es para nada recomendada

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE casa[
<!ELEMENT casa (direccion,numero*,vecino?,pais?)>
    <!ELEMENT direccion (#PCDATA)>
    <!ELEMENT numero (#PCDATA)>
    <!ELEMENT vecino (#PCDATA)> 
    <!ELEMENT pais (nombre | lugar)>
    <!ELEMENT lugar (#PCDATA)>
    <!ELEMENT nombre (#PCDATA)>
]>
<casa>
    <direccion>
        Al lado de mi vecino
    </direccion>
    <numero>
        1234213
    </numero>
    <numero>
        1234213
    </numero>
    <vecino>
        she
    </vecino>
</casa>
```

O la creando un archivo dtd aparte y enlazandolo con este, esta forma si es recomendada:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE casa SYSTEM "XML_with_DTD.dtd">
<casa>
    <direccion>
        Al lado de mi vecino
    </direccion>
    <numero>
        1234213
    </numero>
    <numero>
        1234213
    </numero>
    <vecino>
        she
    </vecino>
</casa>
```
