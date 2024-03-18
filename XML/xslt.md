# Extensible Stylesheet Lenguaje XSL

Lenguaje para dar estilo a los elementos XML

## Estructura de un documento .xsl

### Encabezado

Se comienzan con estas dos lineas, la 1ra igual que en xml y la 2da que lo marcara como archivo xsl

```xsl
<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

</xsl:stylesheet>
```

### Cuerpo del xsl

La siguiente parte será la línea <xsl:template match=”/”>, la cual, con el atributo “match” indica a que elementos del archivo XML se asociará el formato del XSL, en este caso la expresión XPath “/” indica que se asocia a toda la raíz y, por ende, a todo el documento.

- **/**                  ->         La raíz y, por tanto, todo el documento
- **/Objeto**            ->         Solo el especificado, en este caso “Objeto”
- **//Objeto**           ->         Todos los “Objeto” del documento
- **/Objeto/*/Objeto2**  ->         El especificado “Objeto2” que tienen como padre “Objeto”

Ejemplo:

```xsl
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" />

    <xsl:template match="/">
        <html>
            <head>
                <title>Transformación de XML a HTML</title>
            </head>
            <body>
                <h1>Contenido del XML</h1>
                <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
```

## Utilizacion de plantillas

La creación de plantillas, para archivos XML es sencilla, gracias a las etiquetas específicas que se verán a continuación y que reducen su dificultad significativamente.

### ``<xsl:value-of>``

La etiqueta ``<xsl:value-of>`` extraen el valor del elemento referenciado en ella desde el archivo XML.

``<xsl:value-of select=”especie/precio”/>``

Esta línea extraería los valores de “especie” y “precio” especificados en el documento XML. Su único uso es la selección.

### ``<xsl:for-each>``

Esta etiqueta selecciona todos los elementos especificados, en el próximo ejemplo serán “especie” y “precio”, en el conjunto de nodos que abarquen.
``<xsl:for-each select=”especie/precio”></xsl:for-each>``
Es posible acotar la selección con una instrucción añadida:
``<xsl:for-each select=”especie/precio[flores=’Rosa’]”></xsl:for-each>``
Que limitará la búsqueda según el campo seleccionado y el filtro usado:

### ``<xsl:sort select=”Precio”/>``

Permite ordenar el contenido según el valor añadido al atributo “select”, en el caso de tratarse de números se ordenará desde menor a mayor, y si se tratase de nombres se agruparían los campos repetidos.

### Seleccion avanzada ``<xsl:for-each select=”especie/precio”>``

Para un filtrado de mayor precisión podemos emplear la etiqueta ``“<xsl:if>”``, la cual, con el atributo “test” y los caracteres numéricos nos permite delimitar los filtrados. Siempre debe encontrarse dentro de la etiqueta ``“<xsl:for-each>”``

```xsl
<xsl:for-each select=”especie/precio”>
<xsl:if test=”precio<1”›
 <tr>
 <td><xs1:value-of select=”especie”/></td>
 <td><xs1:value-of select=”precio”/></td>
 </tr>
</xsl:if>
</xsl:for-each>
```

### Seleccion avanzada CHOOSE

```xsl
<xsl:choose>
<xsl:when test=”precio>10”>
…
</xsl:when>
<xsl:otherwise>
…
</xsl:otherwise>
</xsl:choose>
```

Esta estructura se señalarán, por un lado, los elementos con un precio superior a 10 y, por otro, los elementos con un precio inferior a 10

## Como asociarlo al XML

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!--Se añaden las dos siguientes lineas para establecer la comunicacion-->
<?xml-stylesheet type="text/xsl" href=" estilo.xsl"?>


<inventario>
<plantas>
 <especie>Rosa</especie>
 <precio>1 €</precio>
</plantas>
<plantas>
 <especie>clavel</especie>
 <precio>0.75 €</precio>
</plantas>
</inventario>
```
