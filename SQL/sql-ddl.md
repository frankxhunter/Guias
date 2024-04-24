# Data Definition Lenguaje

## Principales comandos y sus funciones

- ``CREATE DATABASE databd;`` Crea una base de datos

- ``show databases;`` Muestra las bases de datos exitentes

- ``DROP DATABASE nombre_db;`` Elimina una base de datos

- A continuacion la forma de crear una base de datos:

``` sql

CREATE TABLE nombre_tabla (
campo1 tipo[(longitud)] [NOT NULL] [UNIQUE] [PRIMARY
KEY] [CHECK condición] [DEFAULT valor][, [
…
campoN … ]
[, PRIMARY KEY (campos)]
[, FOREIGN KEY (campos) REFERENCES tabla (campos)
[{ON UPDATE [NO ACTION|SET DEFAULT|SET NULL|CASCADE]
[ON DELETE [NO ACTION|SET DEFAULT|SET NULL|CASCADE]]
}|
{ON DELETE [NO ACTION|SET DEFAULT|SET NULL|CASCADE]
[ON UPDATE [NO ACTION|SET DEFAULT|SET NULL|CASCADE]]
}]]…
);

Ejemplo

CREATE TABLE TProveedor(
    nCodProveedorID numeric(5,0) not null unique primary key,
    cNombreproveedor varchar(50) not null)
);
```

- ``use TProveedor`` Permite usar una base de datos

- A continuacion un ejemplo de como modificar una base de datos

```sql
--Adicionar un campo
ALTER TABLE nombre_tabla
ADD campo tipo[(longitud)] [NOT NULL] [UNIQUE]
[PRIMARY KEY]
[CHECK condición] [DEFAULT valor];


--Ejemplo 
ALTER TABLE TProveedor
add cCorreo varchar(50);

--Añadir un campo con restricciones
ALTER TABLE nombre_tabla
ADD hash VARCHAR PRIMARY KEY 
CHECK (hash LIKE '36hya%')

--Modificar un campo
ALTER TABLE nombre_tabla
MODIFY COLUMN campo [tipo(longitud)] | [DROP DEFAULT];


--Borrar el dato por defecto si lo hay 
DROP DEFAULT


--Borrar un campo
ALTER TABLE nombre_tabla
DROP campo;
```

- ``DROP TABLE nombre_tabla`` Se utiliza para eliminar una tabla

- ``DESC nombre_tabla`` Permite ver la estructura de una tabla

## Añadir restricciones a una tabla

```sql

-- Para añadir una restricion simple
-- De esta forma se pueden añadir una misma restricciones a varios campos de una tabla
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
UNIQUE(columna1, columna2);

-- Si quieres añadir un rango de valor para la tabla
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
CHECK(condicion);

-- Si quieres añadir una llave primaria 
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
PRIMARY KEY(column);

-- Si quieres añadir una llave foránea 
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
FOREIGN KEY(column) REFERENCE table_name(column_name);

```

## Creacion de un indice

Los índices se usan para marcar ciertos campos con la intención de asignarles una importanciao relevancia para luego poder trabajar sobre ellos con mayor facilidad.

```sql
CREATE [UNIQUE] INDEX nombre_indice
ON nombre_tabla
(campo1 [ASC|DESC][, campo2 [ASC|DESC][, …, campoN
[ASC|DESC]]);

CREATE INDEX iProveedor_nombre_telefono
on Proveedor
(cNombre, nTelefono);


Y para borrar un indice: 
DROP INDEX nombre_indice
ON nombre_tabla;
```

## Crear un tipo de dato

```sql
CREATE TYPE nombre_tipo AS tipo[(longitud)];
```

## Creacion de Vistas

```sql
CREATE VIEW vista (campos)
AS consulta;

Ejemplo 
CREATE VIEW vPokemons (Pokedex, Pokemon, Peso, Altura)
AS 
Select *
FROM Pokemon;
```

Se puede acceder con dml con si fuera una tabla normal

### Borrado de una vista

```sql
DROP VIEW vista;
```
