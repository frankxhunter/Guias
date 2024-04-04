# Base de datos Objecto Relacional

Las bases de datos Objeto relacional son una actualizacion de las base de datos relacional que permiten el almacenamiento de objetos

Por defectos suelen ser bases de datos relacional hasta que se empiezan a aplicar conceptos de objecto relacion, que pasan a ser este tipo de base de datos

Bases de datos Object-Relation mas conocidas

- **Oracle**
- **Postgres-SQL**

## Como crear objectos

Sintaxis en Oracle

```sql
CREATE OR REPLACE TYPE DatosAcademicos AS OBJECT(
    titulo VARCHAR2(100),
    fecha DATE,
    centro VARCHAR2(100)
);
/
CREATE OR REPLACE TYPE Persona AS OBJECT(
    dni VARCHAR2(100),
    nombre VARCHAR2(100),
    datos_academicos DatosAcademicos,
);
```

## Herencia

```sql
CREATE OR REPLACE TYPE Persona AS OBJECT(
    dni VARCHAR2(100),
    nombre VARCHAR2(100),
    datos_academicos DatosAcademicos,
) NOT FINAL;
/ 
-- Por defecto los objetos son FINAL
-- Lo cual significa que no se pueden heredar de ellos
-- En caso de que no ser necesario se debe especificar

-- Por tanto en vez de borrar el objeto anterior se puede modificar
ALTER TYPE PERSONA NOT FINAL;
/
-- O borrar
DROP TYPE Persona;
/

-- Para representar la herencia se usa UNDER
-- No esta permitida la herencia multiple

CREATE OR REPLACE TYPE Alumno UNDER Persona(
    nia INT
);
/
```

## Objetos por filas y por columnas

### ROW OBJECT

En este caso, se crea una tabla donde cada una de sus filas es una objecto en particular

```sql
/
CREATE TABLE personas OF Persona(
    dni PRIMARY KEY,
    nombre NOT NULL
)
/
-- Para agregar una fila se haria de la siguiente forma
INSERT INTO personas VALUES (Persona('123214324', 'Pepe', NULL))
/
```

### COLUMN OBJECT

En este caso una columna abordaria un objeto, por tanto una de las celdas de cada fila representaria un objeto

```sql

CREATE TABLE personas(
    referencia INT PRIMARY KEY,
    persona Persona NOT NULL
);
/
INSERT INTO personas VALUES(1, Persona(123432, 'Pepe', NULL));
/
```

## Referencias a objetos

```sql

-- Se utiliza REF para asignar una referencia a un objeto
CREATE OR REPLACE TYPE Actividad AS OBJECT (
    nombre VARCHAR2(100),
    descripcion VARCHAR2(100),
    supervisor REF Persona
    -- En este caso supervisor contiene una referencia (OID) a un objeto Persona
);
/
-- Se utiliza SCOPE IS para defenir el alcance de una variable
-- Por ejemplo en una tabla se utiliza para definir que referencias puede contener
CREATE TABLE actividades OF Actividad(
    nombre NOT NULL,
    description NOT NULL,
    supervisor SCOPE IS personas
    -- Aqui se define supervisor con un alcance a la tabla personas
    -- Es decir, que solo puede contener referencias del Objeto Persona,que se encuentren en la tabla personas
);
/

-- Ejemplo de como seleccionar la referencia de un objecto
SELECT REF(r) FROM actividades r;
/

--Como agregar a tabla de actividades con una referencia
INSERT INTO actividades VALUES(
'fiesta', 
'es mi cumpleaños',
(SELECT REF(p) FROM Personas p WHERE p.nombre = 'Pepe')
);
/
-- Ejemplo de como selecccionar un objeto a traves de su referencia 
-- Se debe seleccionar el atributo del objeto sino devolvera el tipo de objeto
select DEREF(a.supervisor).dni as DNI, a.nombre from actividades a;
/
```

## Arrays

Se puede crear tipos de datos que sean arrays

```sql
CREATE OR REPLACE TYPE Telefonos -- Creamos el tipo de dato array con un nombre
AS VARRAY(2) -- espcificamos que sera un array, y el numero maximo de valores que tendra
OF CHAR(9); -- decimos que tipo de valores contendra el array
/

-- Creamos un objeto que contendra un array
CREATA OR REPLACE TYPE Persone AS OBJECT (
    dni CHAR(9),
    nombre VARCHAR(9),
    telefonos Telefonos
);
/

-- Creamos una tabla con este objeto
CREATE TABLE persones OF Persone (
    dni PRIMARY KEY,
    nombre NOT NULL
);
/

-- Como insertar en la tabla
INSERT INTO persones
VALUES(
    Persone(
        '34234234',
        'Maria',
        Telefonos('123456789', '987654321')
    )
);
/
```

## Tablas anidadas

Es una tabla donde una columna representa otra tabla

PASOS:

1. Crear un tipo con referencia a una tabla
2. Crear una tabla con una columna con el tipo anterior

```sql
-- Creamos el tipo que refencia a la tabla
CREATE OR REPLACE TYPE ALUMNE AS TABLE OF REF persona;
/

-- En este caso se usara un objeto con una tabla 
CREATE OR REPLACE TYPE Curso AS OBJECT (
    nombre VARCHAR2(50),
    fecha DATE,
    alumnes AlUMNE
);
/

-- Por utlimo creamos la tabla que contiene al objeto que contiene a la tabla 
CREATE TABLE cursos OF CURSO (
    nombre PRIMARY KEY
) NESTED TABLE alumnes STORE AS alumnes_tab -- esto es necesario para especificar que esta tabla contendra a otra tabla
/

-- Como insertar un valor
INSERT INTO cursos
VALUES(
    Curso('informatica', 
    null,
    Alumno(
        Select ref(e) from personas e
    ))
);
```

## Metodos

A la hora de definir un metodos, los objectos deben crearse en dos partes, la primera es el encabezado como hemos visto anteriormente y que ademas sera el lugar donde se declaran los metodos que tendra el objeto, y luego el cuerpo donde se definen los metodos

```sql
-- Encabezado del objeto 
CREATE OR REPLACE TYPE rectangulo AS OBJECT(
    id NUMBER, 
    longitud number, 
    ancho number, 
    area number,

    CONSTRUCTOR FUNCTION rectangulo( id number, longitud number, ancho number)
        RETURN SELF AS RESULT,
    MAP MEMBER FUNCTION getid
        RETURN NUMBER,
    MEMBER PROCEDURE mostrar_datos( SELF IN OUT NOCOPY rectangulo)
);
/
-- Cuerpo
CREATE OR REPLACE TYPE BODY rectangulo AS
    CONSTRUCTOR FUNCTION rectangulo ( id number, longitud number, ancho number)
        RETURN SELF AS RESULT AS 
    BEGIN
        self.id := id;
        self.longitud := longitud;
        self.ancho := ancho;
        self.area := longitud * ancho;
        RETURN;
    END;
    MAP MEMBER FUNCTION getid RETURN NUMBER IS
    BEGIN
        RETURN id;
    END;
    MEMBER PROCEDURE mostrar_datos (SELF IN OUT NOCOPY rectangulo )
    IS 
    BEGIN
        dbms_output.put_line('longitud: ' || to_char(longitud)
                            || 'ancho: ' || to_char(ancho));
        dbms_output.put_line(' area: '|| to_char(area));
    END;
END;       
/

-- Ejemplo de como crear datos
CREATE TABLE rectagulos(
    rectangulo Rectagulo
);

INSERT INTO rectagulos values(rectangulo(1,5,10));

```
