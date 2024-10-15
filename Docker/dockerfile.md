# Dockerfile 

## Dockerfile format

El Dockerfile es un archivo q contiene todas las intrucciones q le dicen al docker daemon como crear la imagen de docker

Por conversion las intrucciones se escriben en mayúsculas 

```shell
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

```docker build enki```

> [!NOTE]
> Debemos correr este comando estando en la ubicación donde se encuentra el docker file, en parámetro "enki" corresponde al nombre de la imagen


## Describiendo los comandos del dockerfile

### FROM

Todo dockerfile debe comenzar con la instrucción "FROM" solo precedida de uno mas argumentos q representan argumentos de compilación pasados externamente
 El "FROM" indica la imagen base a partir de la cual se debe crear la imagen de docker, como por ejemplo "node" o "ubuntu" 
Ejemplo de un java con jdk instalado


```
FROM openjdk:17-jdk-slim
```

### CMD
Todo docker file debe contener un comando 'CMD' o un 'EMTRYPOINT' indicando el comando de inicio de la imagen

El comando CMD indica el comando q se ejecutará para iniciar la imagen, a diferencia del comando 'RUN' q indica como construir la imagen, este indica como ejecutar la imagen 

```sh
CMD "echo" "Hello, World!"
```

### ENTRYPOINT

Define el comando de ejecución principal de la imagen, a diferencia de 'CMD' este es más estricto y no puede ser sobrescrito, definiendo así el comando principal de ejecución, si el usuario pasa un comando adicional se le agregará como argumentos 

```sh
ENTRYPOINT "python app.py"

# Combinado con CMD
ENTRYPOINT ["python"]
CMD ["app.py"]
```