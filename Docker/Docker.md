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

### Principales comandos de Docker

| **Categoría**                        | **Comando**                                             | **Descripción**                                                                 |
|--------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------|
| **Imágenes**                         | `docker images`                                         | Lista todas las imágenes locales.                                               |
|                                      | `docker pull <imagen>`                                  | Descarga una imagen desde Docker Hub o un repositorio privado.                  |
|                                      | `docker build -t <nombre_imagen> .`                     | Construye una nueva imagen desde un `Dockerfile`.                               |
|                                      | `docker rmi <imagen>`                                   | Elimina una imagen local.                                                       |
|                                      | `docker tag <imagen> <nombre:etiqueta>`                 | Etiqueta una imagen local con un nombre y etiqueta específicos.                 |
| **Contenedores**                     | `docker run <imagen>`                                   | Crea y ejecuta un nuevo contenedor desde una imagen.                            |
|                                      | `docker run -it <imagen>`                               | Ejecuta un contenedor de manera interactiva con acceso a la terminal.           |
|                                      | `docker ps`                                             | Muestra todos los contenedores en ejecución.                                    |
|                                      | `docker ps -a`                                          | Lista todos los contenedores, incluidos los detenidos.                          |
|                                      | `docker stop <contenedor>`                              | Detiene un contenedor en ejecución.                                             |
|                                      | `docker start <contenedor>`                             | Inicia un contenedor detenido.                                                  |
|                                      | `docker restart <contenedor>`                           | Reinicia un contenedor en ejecución.                                            |
|                                      | `docker rm <contenedor>`                                | Elimina un contenedor detenido.                                                 |
|                                      | `docker logs <contenedor>`                              | Muestra los logs de un contenedor.                                              |
|                                      | `docker exec -it <contenedor> <comando>`                | Ejecuta un comando dentro de un contenedor en ejecución.                        |
| **Volúmenes**                        | `docker volume ls`                                      | Lista todos los volúmenes en el sistema.                                        |
|                                      | `docker volume create <nombre>`                         | Crea un nuevo volumen.                                                          |
|                                      | `docker volume rm <nombre>`                             | Elimina un volumen.                                                             |
|                                      | `docker run -v <volumen>:<ruta>`                        | Monta un volumen en un contenedor.                                              |
| **Redes**                            | `docker network ls`                                     | Lista todas las redes de Docker.                                                |
|                                      | `docker network create <nombre>`                        | Crea una nueva red de Docker.                                                   |
|                                      | `docker network rm <nombre>`                            | Elimina una red de Docker.                                                      |
|                                      | `docker run --network <nombre_red>`                     | Ejecuta un contenedor en una red específica.                                    |
| **Otros Comandos**                   | `docker inspect <contenedor imagen>`                    | Muestra información detallada sobre un contenedor o imagen.                     |
|                                      | `docker-compose up`                                     | Inicia los servicios definidos en un archivo `docker-compose.yml`.              |
|                                      | `docker-compose down`                                   | Detiene y elimina los contenedores creados por `docker-compose`.                |
|                                      | `docker system prune`                                   | Limpia el sistema eliminando contenedores, redes, imágenes y volúmenes no usados.|

