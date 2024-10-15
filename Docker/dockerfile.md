# Dockerfile 

## Dockerfile format

El Dockerfile es un archivo q contiene todas las intrucciones q le dicen al docker daemon como crear la imagen de docker

Por conversion las intrucciones se escriben en mayúsculas 

```md
# Use the node image as the base image
FROM node

# Initialize an env var for this image
# that has a default value of "fun"
ENV ENKI="fun"

# the RUN command allows us to run any
# shell command or bash script available
# at this step of building the image.
# This command will have access to all
# environment variables created above it.
RUN echo "Learning Docker is $ENKI"

# Expose port 1234 on the container.
# We still have to use -p when running this
# container to link this port to an exposed
# port on the host in which the container is
# running
EXPOSE 1234

# CMD (and/or ENTRYPOINT) is a required
# command. It is a final command that will
# be run every time a container is launched
# (or restarted). Only one CMD is allowed.
# If there are multiple, last one wins.
CMD ["echo", "Docker", "is", "cool"]
```

## Construir la imagen a partir del Dockerfile

Para construir la imagen de docker debemos correr el siguiente comando donde ejecutaremos el Dockerfile

''docker build enki''

NOTE
Debemos correr este comando estando en la ubicación donde se encuentra el docker file, en parámetro "enki" corresponde al nombre de la imagen


## Describiendo los comandos del dockerfile

Todo dockerfile debe comenzar con la instrucción "FROM" solo precedida de uno mas argumentos q representan argumentos de compilación pasados externamente
 El "FROM" indica la imagen base a partir de la cual se debe crear la imagen de docker, como por ejemplo "node" o "ubuntu" 
Ejemplo de un java con jdk instalado
```
FROM openjdk:17-jdk-slim
```