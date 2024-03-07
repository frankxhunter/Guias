# Extensible Markup Lenguaje

XML es un lenguaje de marcadas nacido para solucionar el problema de html de no poder generar etiquetas propias

## Como crear un xml y estructura

Los archivos xml deben tener la extension .xml

La estructura de un xml consta primero de una cabecera donde se especifica el tipo de archivo, la version, la decodificacion usada:

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

Luego le sigue el cuerpo del documento contruido de forma alborea donde debe haber un unico elemento padre y todos los demas deben ser elementos anidado

```xml
<?xml version="1.0" encoding="UTF-8"?>
<perro>
    <raza>
        Labrador
    </raza>
    <name>
        Firulais
    </name>
</perro>
```

*Nota*: Los elemento tambien pueden contener atributos
ejemplo ``` <perro color="negro" >Darmata</perro> ```

## Como validar un elemento XML

Para validar un XML se debe utilizar un esquema y asociarlo a este documento, para esto se puede utilizar tanto DTD como XSD, ver documentos referentes a esto
