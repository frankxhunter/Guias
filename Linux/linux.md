# Comandos de linux para uso general

## Comandos para el gesto de ficheros de linux

``cd carpeta`` entrar a una carpeta
``cd ~`` accede al directorio home
``touch archivo.txt`` crear un nuevo archivo
``rm archivo.txt`` elimnar archivos
``rm -rf *`` borra todo lo que hay en el directorio actual  
``rm -rf doc*`` borra todo lo que hay en el directorio actual que comiencen con doc  
``rm -rf s*t`` borra todo lo que hay en el directorio actual que comiencen con s y terminan con t
``ls -l`` informacion de los ficheros de la carpeta actual
```mkdir carperta`` permite crear una carpeta
``mv directorio original destino`` sirve para mover directorios
``cp directorio_original destino`` hace una copia del directorio
``touch fichero.txt`` sirver para crear un nuevo fuchero

## Comandos para modificar y mostrar contenido de un fichero

```nano fichero.txt`` abre el editor de texto sobre un fichero
```cat fichero.txt``muestra el contenido de un fichero
```sort fichero.txt`` muestra el contenido de un fichero ordenado
```sort -n fichero.txt`` muestra el contenido de un fichero ordenado por numeros
```sort -r fichero.txt``muestra el contenido de un fichero ordenado inversamente
```sort - 1,1 fichero.txt`` muestra el contenido de un fichero ordenado por el numero de caracteres en cada linea
```echo hola > fichero.txt``imprime el texto y lo guarda en el fichero sobreescribiendo la informacion que tenia
```echo hola >> fichero.txt``imprime el texto y lo guarda en el fichero a continuacion de la informacion que tenia
```cat fichero.txt``
```cat fichero.txt``

## Crear un alias

 Permite crear una version de un comando personalizado

``alias nombre_alias="comando"``

Ejemplo
``alias listar="ls -l"``