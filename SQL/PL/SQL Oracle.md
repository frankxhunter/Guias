# PL/SQL

PL/SQL es el lenguaje de programacion  procedural para bases de datos Oracle, es una version mjorada de SQL

## Estructura

```SQL
[DECLARE]
--Variables, cursores. excepciones
BEGIN
-- sentencia SOL deseadas
-- sentencias de control PL/SOL deseadas:
[EXCEPTION]
-- Excepciones implementadas
END:
```

- DECLARE: Declaracion de variables, es opcional

- BEGIN: Inicio del bloque

- EXCEPTION: Uso de excepciones, es opcional

- END: Fin del bloque

Ejemplo para imprimir en pantalla:

```SQL
SET SERVEROUTPUT ON;

DECLARE
msa varchar2(20):= 'Hola Mundo';
BEGIN
 DBMS_OUTPUT.PUT_LINE(msa);
END;
```

## Tipos de Datos

Los tipos de datos son los mismos que se utilizan en SQL, a continuacion se muestra como se debe realizar su declaracion

``Nombre [CONSTANT] tipo_de_dato [NOT NULL] [:= | DEFAULT |Expresión];``

La asignación se realiza empleando el operador “:=”.

**Ejemplos:**

```SQL
--Variable tipo dehca no inicializada
fechaIngreso DATE;

--Variable numerica inicializada
NEdad NUMBER(18) NOT NULL := 20;

--Variable de caracter inicializada
LocalUsuario VARCHAR2(20):= "MURCIA";

--Constante numerica
NHogar CONSTANT NUMBER := 82;

```

### %TYPE y %ROWTYPE

Estos son tipos de datos especiales que permiten copiar el formato de los datos que ya tenemos en las tablas

#### %TYPE

%TYPE se utiliza para declarar una variable del mismo tipo que una columna existente en una tabla o una variable ya declarada. Esto es útil para garantizar la coherencia de tipos de datos y reducir la necesidad de cambiar declaraciones de variables si las definiciones de columnas cambian.

```sql
DECLARE
   -- Declaración de una variable basada en el tipo de datos de una columna
   v_salary employees.salary%TYPE;
BEGIN
   -- Asignar el salario de un empleado a la variable
   SELECT salary INTO v_salary FROM employees WHERE employee_id = 100;

   -- Mostrar el salario en la consola
   DBMS_OUTPUT.PUT_LINE('El salario es: ' || v_salary);
END;

```

#### %ROWTYPE

%ROWTYPE se utiliza para declarar un registro con la misma estructura que una fila en una tabla o el resultado de una consulta. Esto es útil cuando deseas almacenar todas las columnas de una fila en una sola variable.

```sql
DECLARE
   -- Declaración de un registro basado en el tipo de una fila en una tabla
   v_employee_record employees%ROWTYPE;
BEGIN
   -- Asignar toda la fila de un empleado al registro
   SELECT * INTO v_employee_record FROM employees WHERE employee_id = 100;

   -- Mostrar información del empleado en la consola
   DBMS_OUTPUT.PUT_LINE('ID: ' || v_employee_record.employee_id);
   DBMS_OUTPUT.PUT_LINE('Nombre: ' || v_employee_record.first_name || ' ' || v_employee_record.last_name);
   DBMS_OUTPUT.PUT_LINE('Salario: ' || v_employee_record.salary);
   -- Otros campos de interés
END;

```

## Operadores y expresiones

Los mismo que en SQL

## Entradas y salidas

Dado que PL/SQL no está destinado a los usuarios solo se puede trabajar mediante código, ya que no reconoce entradas y salidas de información que no sean elaboradas desde el código.

Si trabajamos con ORACLE deberemos emplear la variante SERVEROUTPUT para poder llevar a cabo las operaciones necesarias, tan solo es necesario realizar esta operación una sola vez por sesión.

``SET SERVEROUTPUT ON``

Una vez hecho esto el servidor mostrará, por pantalla, información con la siguiente sintaxis:

``dbms_output.put_line (Datos de salida);``

Para realizar la entrada de datos se usa *&*:

Ejemplo completo:

```sql
-- Asegurarse de que esta intruccion se esta ejecutando 
SET SERVEROUTPUT ON;


DECLARE
    nombre VARCHAR2(100);
BEGIN
    --Se pone entre comilla pq es de tipo texto, si fuera numerico no es necesario
    nombre := '&Nombre';

    DBMS_OUTPUT.PUT_LINE('mi nombre es: ' || nombre);
END;
/
```

## Estructuras de control

- Secuencia: Las instrucciones se ejecutan sucesivamente.
- Selección: Según el valor de una variable se elige entre una acción u otra.
- Iteración: Realización de una acción hasta que un valor,
booleano, cambie.

### Seleccion

```sql
DECLARE
nombre VARCHAR2 (100) := '&nombre';
BEGIN
    IF (nombre IS NULL) THEN
        DBMS_OUTPUT.PUT_LINE('Hola desconocido');
    ELSIF (nombre ='Pablo') THEN
        DBMS_OUTPUT.PUT_LINE('Pablo mi mejor amigo ') ;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Hola');
    END IF;
END;
```

### Iterativas o de repeticion

```sql
DECLARE
    numero NUMBER := &numero;
    temp NUMBER := 1;
    suma NUMBER := 0;
BEGIN
    LOOP
        suma := suma + temp;
        temp:= temp + 1;
        EXIT WHEN temp > numero;
    END LOOP;
    dbms_output.put_line('suma = ' || suma);
    
    suma := 0;
    temp := 1;
    
    WHILE temp <= numero LOOP
        suma := suma + temp;
        temp := temp +1;
    END LOOP;
    dbms_output.put_line('suma = ' || suma);
    
    suma := 0;
    temp := 1;
    
    FOR temp IN 1..numero LOOP
        suma := suma+temp;
    END LOOP;
    dbms_output.put_line('suma = ' || suma);
END;
```

## Bloques de Procedimiento

Es como decir una funcion que tiene nombre y se puede invocar en cualquier momento

```sql
CREATE OR REPLACE PROCEDURE suma(n1 in NUMBER, n2 in NUMBER, total OUT NUMBER)
AS
BEGIN
    total := n1 + n2;
END;

DECLARE 
resultado number(8):= 0;
BEGIN
    suma(1, 2, resultado);
    dbms_output.put_line(resultado);
END;
```

## Funciones

Lo mismo que lo anterior pero tiene que devolver algo obligatoriamente, tiene obligatoriamente un return, y todos sus parametros son de entrada

```sql
CREATE OR REPLACE FUNCTION FuncionSuma(n1 NUMBER, n2 NUMBER)
RETURN NUMBER
is 
    total Number;
BEGIN
    total := n1 + n2;
    return total;
END;

BEGIN
    dbms_output.put_line(FuncionSuma(3, 5));
END;
```

## Sentencias SQL

Solo permite DDL, osea solo se pueden usar SELECT, UPDATE, INSERT, DELETE

Con la sentecia select se debe tener cuidado con los valores que devuelve:

- 1 valor: se puede guardar en una variable normal
- 1 fila: se puede guardar en una variable de tipo %ROWTYPE
- Muchas filas: Es necesario el uso de cursores y bucles para recorrer la informacion

```sql
DECLARE 
    CURSOR c_cursos IS (SELECT * from CURSOS);
    r_cursos c_cursos%ROWTYPE
BEGIN
    OPEN c_cursos;
    LOOP
        dbms_output.put_line(r_cursos.nombre);
        FETCH c_cursos INTO r_cursos;
        EXIT WHEN c_cursos%NOTFOUND;
    END LOOP;

    CLOSE c_cursos;

END;
/
```

Otro EJEMPLO con update, insert

```sql
DECLARE 
    importe NUMBER;
    cuentaOrigne VAR
```

Otro Ejemplo

```sql
DECLARE
    importe NUMBER; 
    cuentaOrigen VARCHAR(23);
    cuentaDestino VARCHAR(23);
BEGIN
    importe := 50;
    cuentaOrigen := "214124 124214 412421";
    cuentaDestino := " 2134 4234 234234";
    UPDATE CUENTAS SET saldo = saldo - importe WHERE cuenta = cuentaOrigen;
    UPDATE CUENTAS SET saldo = saldo + importe WHERE cuenta = cuentaDestino;
    INSERT INTO MOVIMIENTOS VALUES (cuentaOrigen, cuentaDestino,importe*(-1), SYSTEDATE);
    INSERT INTO MOVIMIENTOS VALUES (cuentaDestino, cuentaOrigen, importe, SYSTEDATE);
    COMMIT;
EXCEPTION 
    WHEN  OTHERS THEN
    dbms_output.put_line('ERROR: ' || SQLERRM );
    ROLLBACK;
END;
    
```

**Nota**: Notar que si hay errores antes del COMMIT se retiraran todos los cambios hechos, ROLLBACK

## Cursores

Son reservas de memoria para almacenar ejecuciones de sentencias SQL

### Cursores implicitos

```sql
DECLARE 
    curso VARCHAR(20);
    filacursos CURSOS€ROWTYPE:
BEGIN
    SELECT nombre INTO curo FROM CURSOS WHERE CURSOS WHERE id = 1;
    dbms_output.put_line(curso);

    SELECT * into filacursos FROM CURSOS WHERE id = 1;
    dbms_output.put_line(filacursos);

```

- Es necesario usar una variable
- SELECT campo into variable
- El acceso es directamente sobre la variable

### Cursores explicitos

```sql
DECLARE 
    CURSOR c_cursos IS (SELECT * from cursos);
    r_cursos c_cursos%ROWTYPE;

BEGIN
    OPEN c_cursos;
    LOOP
    dbms_output.put_line(r_cursos.nombre);

    FETCH c_cursos INTO r_cursos;
    EXIT WHEN c_cursos%NOTFOUND;
    end loop;

    CLOSE c_cursos;

END;
```

## Exceptiones

```sql
declare
    importe number;
    importe_negativo exception;
    PRAGMA EXCEPTION_INIT (importe_negativo, -200100);
    BEGIN
    impote := &import;

    if(importe < 0) then
    RAISE importe_negativo;
    END iF;

    Exception
     WHEN impote_negativo THEN
        dbms_output.put_line('No puede haber importe negativo');
    WHEN others then
    dbms_output.put_line('ERROS: ' || SQLERRM);
END;

```

## TRIGGERS

Son funciones que se activan ante un cambio en la base de datos

Tienen la siguiente estructura

```sql
CREATE (OR REPLACE) TRIGGER Nombre del disparador
(BEFORE | AFTER) (INSERT|UPDATE|DELETE) (OF campo) (OR … )
ON table
(FOR EACH ROW ( WHEN Condición))
DECLARE
BEGIN
...
END;
```

Ejemplo

```sql
CREATE OR REPLACE TRIGGER tr_uppercase_names
BEFORE INSERT ON empleados
FOR EACH ROW
BEGIN
-- Convertir nombre y apellidos a mayusculas antes de insertar el nuevo empelado 
:NEW.nombre := UPPER(:NEW.nombre);
:NEW.apellido := UPPER(:NEW.apellido);

END;
```
