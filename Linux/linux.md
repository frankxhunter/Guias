# Comandos de linux para uso general

## Comandos para el gesto de ficheros de linux

- ``cd carpeta`` entrar a una carpeta
- ``cd ~`` accede al directorio home
- ``touch archivo.txt`` crear un nuevo archivo
- ``rm archivo.txt`` eliminar archivos
- ``rm -rf *`` borra todo lo que hay en el directorio actual  
- ``rm -rf doc*`` borra todo lo que hay en el directorio actual que comiencen con doc  
- ``rm -rf s*t`` borra todo lo que hay en el directorio actual que comiencen con s y terminan con t
- ``ls -l`` información de los ficheros de la carpeta actual
- ``mkdir carpeta`` permite crear una carpeta
- ``mv directorio original destino`` sirve para mover directorios
- ``cp directorio_original destino`` hace una copia del directorio
- ``touch fichero.txt`` sirve para crear un nuevo fichero

## Comandos para modificar y mostrar contenido de un fichero

- ``nano fichero.txt`` abre el editor de texto sobre un fichero
- ``cat fichero.txt``muestra el contenido de un fichero
- ``sort fichero.txt`` muestra el contenido de un fichero ordenado
- ``sort -n fichero.txt`` muestra el contenido de un fichero ordenado por números
- ``sort -r fichero.txt``muestra el contenido de un fichero ordenado inversamente
- ``sort - 1,1 fichero.txt`` muestra el contenido de un fichero ordenado por el numero de caracteres en cada linea
- ``echo hola > fichero.txt``imprime el texto y lo guarda en el fichero sobrescribiendo la información que tenia
- ``echo hola >> fichero.txt``imprime el texto y lo guarda en el fichero a continuación de la información que tenia
- ``cat fichero.txt`` permite mostrar el contenido del fichero
- ``chmod +x fichero.txt`` sirve para otorgar permisos, en este caso de ejecución, para otros permisos *r* lectura, *w* escritura, para quitarlos usar *-* en vez de *+*

## Crear un alias

 Permite crear una version de un comando personalizado

``alias nombre_alias="comando"``

Ejemplo
``alias listar="ls -l"``
