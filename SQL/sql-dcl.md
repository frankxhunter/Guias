# Data Control Lenguaje

Concesión de privilegios. Son los permisos que se pueden conceder de cara a los objetos de la base de datos, desde una tabla a toda la base de datos. Los permisos que se almacenen en las tablas pueden ser:
» SELECT
» INSERT
» UPDATE
» DELETE

La sintaxis es la siguiente

```sql
GRANT [CONNECT|RESOURCE|DBA|ALL PRIVILEGES|SELECT|UPDATE|INSERT|DELETE]
ON objeto
TO usuarios
 [WITH GRANT OPTION];
```

## Revocacion de privilegios

```sql
REVOKE [CONNECT|RESOURCE|DBA|ALL PRIVILEGES|SELECT|UPDATE|INSERT|DELETE]
FROM usuarios
[ON objetos];
```
