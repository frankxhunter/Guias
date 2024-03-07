# XML Schema o XSD

Como alternativa al DTD, podemos encontrar el XSD, XML schema definition, el cambio se debe a que los archivos XSD permiten especificar tipos de elementos y añadir restricciones y atributos más complejos. Además de lo ya mencionado es destacable que su sintaxis es similar a XML y permite un mayor control sobre las ocurrencias de los elementos que los archivos DTD. Con él es más fácil realizar conversiones de datos

Tienen la extension .xsd

La raíz del archivo XSD será “<xs:schema>” y el resto poseerá una estructura semejante a XML. Este archivo raíz puede contener uno de los siguientes atributos:

Ejemplo:

```xsd
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="perro">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="raza" type="xs:string" />
                <xs:element name="name" type="xs:string"></xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

```xml
<?xml version="1.0" encoding="utf-8"?>

<?xml-model href="XML_schema.xsd"?>
<perro>
    <raza>
        Labrador
    </raza>
    <name>
        Firulais
    </name>
</perro>
```

La estructura comienza con el *xs:schema* como elemento raiz, y partir de ahi todos los demas anidados, ademas cada elemento se define con *xs:element* y dentro sus caracteristicas:

```<xs:elemento nombre=”X” tipo=”Y”></xs:elemento>```

Donde nombre es el nombre definido para el elemento, el tipo se refiere al tipo de elemento, y adentro de la etiqueta pueden ir otras etiquetas que definen sus caracteristicas, las veremos a continuacion pero primero los tipos de elementos:

## Tipos de elementos mas comunes

- xs:string
- xs:decimal
- xs:integer
- xs:boolean
- xs:date
- xs:time

```<xs:element name=”Inscripción” type=”xs:date”/>```

Se les puede añadir un valor predeterminado o fijo a los elementos. Este valor puede ser por defecto (default) que
permite modificaciones o un valor fijo obligatorio (fixed) que no
las permite.
``<xs:element name=”flores” type=”xs:string” default=”Rosa”/>``

Los atributos son opcionales de forma predeterminada, salvo que se use el atributo “use” seguido por su valor, los atributos obligatorios:
Se pueden añadir restricciones a los atributos con la entrada
``<xs:restriction base”atributo”>``. Puedes consultar más información sobre este asunto en: [w3Schools](<https://www.w3schools>.
com/xml/schema_facets.asp)

## Elementos complejos

Pueden ser elementos vacíos o contener elementos hijos, con contenido y contenido vacío, atributos, etc.
Los elementos vacíos aparecen de la siguiente forma:
``<xs:element name=”Texto”/>``
La aparición de estos elementos se marca con ``<xs:complexType>`` el indicador de orden y los elementos que
contenga. El indicador Orden especifica el orden de aparición de los distintos elementos. Puede ser de tres tipos:

»``<xs:sequence>``: todos los elementos hijos según la
secuencia indicada.
» ``<xs:choice>``: solo uno de los indicados.
» ``<xs:all>``: todos sin importar el orden.

```xsd
    <xs:element name=”flora”›
        <xs:complexType>
            <xs:sequence>
                <xs:element name=”Flores” type=”xs:string” default=”Rosa”/>
                <xs:element name=”Arbustos” type=”xs:string” default=”Cardo”/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
```

## Indicadores de ocurrencias

La cantidad de veces que puede o debe aparecer un elemento en el XML.
» maxOccurs: Siendo por defecto 1, especifica el número máximo de veces que un elemento puede aparecer, en caso de no poseer limitación su valor sería “unbounded”.
» minOccurs: Siendo por defecto 1, especifica el número mínimo de veces que un elemento debe aparecer, en caso de no poseer limitación su valor sería “unbounded”.

## Tipos de datos XSD

Los tipos de datos más comunes son los siguientes:

- decimal = Números decimales
- boolean = Valor lógico
- dateTime = Año-mes-díaThora:minuto:segundo (se incluye una “T” intercalada)
- string = Cadena de caracteres, texto
- date = Año-mes-día
- time = Hora:minuto:segundo
- integer = Número entero tanto positivo como negativo

## Restrincciones

Las restricciones, o facetas, se pueden asociar tanto a tributos yelementos, aunque ya se han visto se ampliarán a continuación:

- length = Una longitud fija
- minLenght = Una longitud mínima
- maxLenght = Una longitud máxima
- maxExclusive = Valor menor al especificado
- minExclusive = Valor mayor al especificado
- maxInclusive = Valor menor o igual al especificado
- minInclusive = Valor mayor o igual al especificado
- totalDigits = Número máximo de dígitos, incluidos decimales
- fractionDigits = Número máximo de dígitos de decimales de un número
- enumeration = Se selecciona uno de los valores admitidos en una lista predefinida
- pattern = se especifica un rango de caracteres admitidos

Ejemplos

```xsd
<!-- Restriccion numerica -->
<xs:simpleType name=”Limitación de notas”›
    <xs:restriction base=”xs:integer”>
        <xs:minInclusive value=”0”/>
        <xs:maxInclusive value=”100”/>
    </xs:restriction>
</xs:simpleType>

<xs:simpleType name=”Limitación de decimales
de notas”›
    <xs:restriction base=”xs:decimal>
        <xs:totalDigits value=”5”/>
        <xs:fractionDigits value=”2”/>
    </xs:restriction>
</xs:simpleType>

<!-- Restrinccion de longitud -->
<xs:simpleType name=”DNI”›
    <xs:restriction base=”xs:string”›
        <xs:length value=”9”/>
    </xs:restriction>
</xs:simpleType>

<!-- Restrinccion de numeracion -->
<xs:simpleType name=”Estado”›
    <xs:restriction base=”xs:string”›
        <xs:enumeration value=”No empezado”/>
        <xs:enumeration value=”En proceso”/>
        <xs:enumeration value=”Parado”/>
        <xs:enumeration value=”Completado”/>
    </xs:restriction>
</xs:simpleType>

<!-- Restriccion mediante expresiones regulares o patrones -->
<xs:simpleType name=”Número de participantes”>
    <xs:restriction base=”xs:integer”>
        <xs:pattern value=”[0-6]”/>
    </xs:restriction>
</xs:simpleType>

```

## Como asociar el documento xsd al xml

Se hace de la siguiente forma:

En el documento xml añadir al inicio despues de la cabecera la siguiente linea:

```xsd
<?xml-model href="XML_schema.xsd"?>
```
