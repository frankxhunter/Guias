# Data Manipulation Lenguaje

Este lenguaje nos permite que se pueda acceder a la información que se almacena en una base de datos y modificarla

## La sentencia Select

```sql
SELECT [DISTINCT] campos
 FROM tablas
 [WHERE condición]
 [GROUP BY campos
 [HAVING condición_agrupación]]
 [ORDER BY campos];

Ejemplos 

SELECT numero_pokedex, nombre
FROM pokemon
WHERE peso = 20;

```

## Palabras reservadas

- DISTINCT = elimina los valores repetidos
- WHERE = Para establecer una condicion
- BETWEEN = Para un valor que este entre dos valores:

```sql
SELECT altura, nombre
FROM pokemon
WHERE altura BETWEEN 10 AND 30;
```

- AND, OR, NOT = Operadores logicos que se pueden usar en el where

```sql
SELECT altura, nombre
FROM pokemon
WHERE altura > 10
AND id = 92
```

- IS NULL o IS NOT NULL = Para especificar si el valor es null o no

- LIKE = Se usa para cadenas parecidas, se utiliza tambien el operador % para especificar el resto de la cadena por ejemplo:
Texto que empieza por "cadena" = "cadena%"
Texto que termina por "cadena" = "%cadena"
Texto que contiene "cadena" = "%cadena%"

## Funciones de agregacion

En la sentencia SELECT seleccionamos varios campos, aqui tambien se pueden utilizar funciones de agregacion:

**COUNT(campo)** Muestra el numero de registros que cumplen con la funcion, si en vez de usar el comidin (*) usamos el nombre del campo no se tendran en cuenta los valores que sean nulos de dicho campos

```sql
SELECT COUNT(*)
FROM pokemon
WHERE numero_pokedex = 5 or numero_pokedex = 10 ;

//Aqui contamos el numero de registros que tienen la pokedex 5 o 10
```

- **AVG(campo)** = Se utiliza para sacar una media aritmetica de un campo numerico

- **SUM(campo)** = Realiza la suma de los valores de un campo

- **MAX(campo)** = Muestra el valor maximo

- **MIN(campo)** = Muestra el valor minimo

## GROUP BY

Si lo que queremos es que el resultado de estas funciones se nos muestre divido por los resultados de cada registro dependiendo de otros campos, es decir, que el resultado de cada función es para un valor de un campo en particular, debemos de usar la cláusula GROUP BY, que tiene la siguiente forma:

```sql
SELECT campos, funcion
FROM tabla 
GROUP BY campos;
```

Tambien se puede usar **HAVING** que seria lo mismo que el **WHERE** pero para **GROUP BY**

```sql
SELECT id_tipo_ataque, COUNT(*)
FROM tipo_ataque
GROUP BY id_tipo_ataque
HAVING COUNT(*) = 8
```

## ORDER BY

Se utiliza para ordenar, por defecto ordena Ascendentemente, para cambiar esto se agrega **DESC** al final. . Para que la consulta sea eficiente y no altere el rendimiento de la base de datos, un correcto uso de ORDER BY es que los campos que se usen para ordenar también se encuentren ordenados con respecto al índice de la tabla.

```sql
SELECT *
FROM tipo 
ORDER BY id_tipo, nombre;
```

## Consultas sobre varias tablas

Las consultas en SQL nos permiten que se puedan realizar sobre varias tablas al mismo tiempo para así obtener un resultado más preciso o concreto. Esta operación se llama composición o JOIN y sigue la siguiente estructura:

```sql
SELECT [DISTINCT] campos
 FROM tabla1, tabla2, …, tablaN
 WHERE condición_relación


 Ejemplo 
 SELECT nombrem, id_tipo
 FROM pokemon, pokemon_tipo
 WHERE pokemon.numero_pokedex = pokemon_tipo.numero_pokedex
```

Para esto es mejor usar el **JOIN**

```sql
--Ejemplo de como usar JOIN
SELECT p.id, p.name FROM pokemon AS p
JOIN Categoria AS c 
ON p.id = c.pokemon_id;

-- Ejemplo de multiples JOINS
SELECT pokemon.nombre, tipo.nombre
FROM pokemon
INNER JOIN pokemon_tipo
ON pokemon,numero_pokedex = pokemon_tipo,numero_pokedex
INNER JOIN tipo
ON pokemon_tipo.id_tipo = tipo.id_tipo;
--Nota, INNER JOIN es lo mismo que JOIN, ademas tambien existe LEFT JOIN, RIGHT JOIN, FULL JOIN

```

- **LEFT (OUTER) JOIN** = En el resultado se incluirán los registros de ala tabla de la izquierda que no tengan relación con registros de la tabla de la derecha,
- **RIGHT (OUTER) JOIN** = Se mostrarán por pantalla los registros resultados de la comparación y también los registros de la tabla de la derecha que no tengan relación con los de la otra tabla.
- **FULL (OUTER) JOIN** = Se incluyen todos los registros de ambas tablas, tengan o no relación entre sí

## Combinacion de consultas

› UNION [ALL]. Se unen todos los resultados de ambas consultas y se muestran seguidos. Los resultados que sean repetidos se eliminarán por defecto a no ser que se use la opción ALL.

```sql
SELECT nombre
FROM pokemon
UNION 
SELECT id_tipo
FROM pokemon_tipo;

Aqui saldra en una columna los nombres de todos los pokemones y a continuacion el codigo de ellos
```

Podemos comprobar que solo aparece la opción nombre, ya que esto es ideal para campos que usen el mismo nombre en distintas tablas o distintas bases de datos.

Es importante tener en cuenta que los campos seleccionados de las consultas deben de ser el mismo número, no se puede seleccionar un campo en la primera consulta y 3 en la segunda, por ejemplo.

- **MINUS** = Se muestran todos los datos que muestra la primera consulta, pero quitando los que coincidan con la segunda.
- **INTERSECT** = Se muestran todos los datos que serían resultado a ambas consultas, es decir, coincidentes.

## Consultas anidadas o subconsultas

También podemos usar en SQL las subconsultas, que se trata de realizar una consulta con comparación, pero el dato usado para la comparación viene devuelto por otra consulta.

No existe un número limitado de consultas que ir anidando, estas son infinitas, pero claro, cuantas más consultas, mayor es la complejidad. Se puede realizar esta operación usando los siguientes operadores:

- Operadores de comparación. La subconsulta devuelve un único valor, o si no, nos dará error.

```sql
SELECT nombre
FROM tipo 
WHERE id_tipo = (SELECT id_tipo
FROM pokemon_tipo, pokemon
WHERE pokemon_tipo.numero_pokedex = pokemon.numero_pokedex
AND nombre = "SQUIRtle")
```

- Buscar dudas con el **IN**

## ALIAS

Par autilizar un alias se utiliza la palabra resevada **AS**

```sql
SELECT nombre AS "POKEMON"
FROM pokemon;
```

## Funciones integradas

Son funciones que permiten modificar los datos obtenidos:

Funcion || Parametros || Return

**ABS** || Número Valor || absoluto del número

**MOD** || Número 1, Número 2 || Módulo o resto de la división del primero número entre el segundo.

**POSITION** || Cadena de caracteres 1, Cadena de caracteres 2 || Posición de la primera cadena dentro de la segunda.

**CHAR_LENGTH** || Cadena de caracteres || Tamaño de la cadena

**SUBSTRING** || Cadena de caracteres, Posición de inicio, Número de caracteres || Cadena de caracteres dentro de la cadena recibida como parámetro. El segundo de los parámetros define la posición de la cadena original a partir de la que se extraerá de la cadena que será devuelta. El tercer parámetro será el número de caracteres de la cadena resultante.

**UPPER** || Cadena de caracteres || Cadena de caracteres original en mayúsculas.

**LOWER** || Cadena de caracteres || Cadena de caracteres original en minúsculas.

## Insercion de registros

### Campo a campo

Solamente se va a insertar un registro

```sql
INSERT INTO tabla [ (campo1[, campo2, …, campoN])]
VALUES (valor1[, valor2, …, valorN]);

EJEMPLO:
INSERT INTO pokemon
(numero_pokedex, nombre, peso, altura)
VALUES
("152", "Chikorita", 6, 1);
```

## Modificacion de los registros

```sql
UPDATE tabla
SET campo1 = valor1[.
campo2 = campo2,
…
campoN = valorN]
[WHERE condición];

Ejemplo: 
UPDATE pokemon
SET numero_pokemon = 154
WHERE numero_pokedex = 153;
```

Si se usa un criterio menos restrictivo, puede que afecte a varios registros.

Por otro lado, se pueden actualizar varios campos a la vez

## Eliminacion de registros

```sql
DELETE FROM tabla
 [WHERE condición];

 Ejemplo:
 DELETE from pokemon
 WHERE numero_pokedex = 153;
```
