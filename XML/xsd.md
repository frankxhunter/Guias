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
``<xs:restriction base”atributo”>``. Puedes consultar más información sobre este asunto en: [w3Schools](https://www.w3schools.
com/xml/schema_facets.asp)

