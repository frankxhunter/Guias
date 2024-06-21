# Docker

## Comenzando con los comandos

Esta es la estructura básica q siguen la mayoría de los comandos de docker

```shh
docker <object> <action>
```

Por ejemplo, listar todos los contenedores:

```shh
docker container ls
```

### Mas ejemplos

Para remover una imagen llamada rgninx

```shh
docker image rm nginx
```

## Lista de comandos genéricos para objetos

A continuación se listan comandos típicos básicos para los objetos en docker

```shh
# list all objects
docker <OBJECT> ls

# remove an object
docker <OBJECT> rm <ID_OR_NAME>

# return JSON metadata describing the object
docker <OBJECT> inspect <ID_OR_NAME>

# remove all unused objects
docker <OBJECT> prune
```
