# SQL Conceptos generales

Las distintas funciones que se pueden realizar con SQL como lenguaje se pueden dividir en tres sublenguajes:

- DDL (data definition language) = Lenguaje de definición de datos, nos facilita la creación de la estructura de la base de datos, tablas y la propia base de datos.

- DML (data manipulation language) = Lenguaje de manipulación de datos, es el lenguaje que nos permite trabajar sobre los datos que contiene la base de datos como la modificación o consulta de los datos.

- DCL (data control language) = Lenguaje de control de datos, es el lenguaje que usaremos para administrar la seguridad de los datos mediante permisos y usuarios.

Como en el lenguaje SQL no hay un a universalidad debido a que se ha ido implementando de distintos modos a lo largo de los años, nosotros vamos a seguir la sintaxis SQL estándar, que es la recogida en la versión SQL:1999.

## Tipos de en SQL

**CHAR (CHARACTER)**: se trata de una cadena de caracteres que tienen una longitud fija y que habrá que especificar. Si no se especifica nada, será de un solo carácter.

**VARCHAR (CHARACTER VARYING)**: es una cadena de caracteres en la que su longitud puede variar, pero habrá que definir una longitud máxima.

**CLOB (CHARACCTER LARGE OBJECT)**: se trata de una cadena de caracteres que tienen un gran tamaño y por eso se almacenará en un archivo a parte al de la tabla. Algunas veces hay ciertos SGBD que limitan el trabajo con este tipo de datos.

**INT (INTEGER)**: definimos en este tipo los números enteros que se pueden almacenar en 4 bytes. El rango comprendido va desde el – 2 147 483 648 al 2 147 483 647.

**SMALLINT**: comprende los números enteros almacenados en 2 bytes, su rango ahora va desde el – 32 768 al 32 767.

**NUMERIC o DEC (DECIMAL)**: es un número que tienen una parte decimal de tamaño fijo y para eso deberemos de especificar el número de dígitos totales y el de dígitos decimales que se separan por una coma. Un ejemplo sería el campo ‘nNotaSelectividad’ que se podría definir como NUMERIC(4,2), dos dígitos enteros y dos decimales.

**FLOAT o REAL**: definimos aquí un número real en coma flotante.

**DOUBLE**: se define un número real en coma flotante, pero con doble precisión.

**DATE**: almacenamos la fecha en formato año-mes-día.

**TIME**: almacenamos la hora en formato hora-minuto-segundo.

**TIMESTAMP**: se almacena la fecha y la hora en la que se modifique el registro afectado y su formato es año-mes-día-hora-minuto-segundo.

**INTERVAL**: representa un intervalo a lo largo del tiempo y tenemos dos formatos, años-meses o días-horas-minutos-segundos. Los SGBD almacenan normalmente los datos de una fecha en concreto como todos los segundos que han transcurrido desde el día 1 de enero de 1970. Este formato se llama Unix time y es común para otros tipos de software. Valores lógicos

**BOOLEAN**: se incluyen aquí os valores “true” y “false” para dictaminar si algo es verdadero o falso y dependiendo de la implementación también se podría almacenar el valor NULL (nulo).
**BLOB (BINARY LARGE OBJECT)**: almacenas imágenes, documentos, u otros objetos de carácter binario que normalmente se almacenan en un archivo fuera de la tabla en la que estén referenciados. Tipos definidos por el usuario. Los veremos más adelante con detalle

## Comentarios

```sql
-- Para hacer comentarios en sql esta es la forma de hacerlo
```

## Crear copias de seguridad

A continuación se mostrara el comando para crear una copia de seguridad para cada gestor de base de datos:

### MySQL

Crear copia de seguridad:
``mysqldump -h localhost -u root -p nombre_de_base_de_datos > ruta\archivo.sql``

Importar los datos de la copia de seguridad:
``mysql -h localhost -u root -p pedidos < C:\Frank\myslq.sql``
