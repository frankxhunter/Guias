# Comandos de linux para manejo de usuarios

Primero para manejar los usuarios se debe logear como superusuario para esto usamos el comando:

```su root```

Luego introducimos la contraseña

## Agregar un usuario

Una vez logeado como superadmni el comando seria el siguiente para agregar un usuario:

```sudo useradd [-g grupo] [-G grupo[, grupo …]][-d directorio_home [-m]] [-p contraseña_encriptada][-s shell] login```

- *g grupo*: se usa para asignar el grupo principal del usuario. Todos los usuarios tienen por lo menos un grupo principal al que se pertenece, y todos los demás serán
grupos secundarios. Si no se especifica esta opción, habrá un grupo por defecto con el mismo nombre que el del usuario.
- *G grupo*: se listan todos los grupos secundarios, separados por comas y sin espacios.
- *d directorio_home*: se establece el directorio home del usuario, donde el usuario trabajará de manera normal. Si no se especifica nada, se usará el directorio /home/ nombre_usuario.
- *p contraseña_encriptada*: se especifica la contraseña de usuario que se encriptará para que no se pueda descubrir. Si no se especifica, no se podría loguear con este usuario al sistema.
- *m*: si no existe o no se especifica el directorio, lo crea y se copian los archivos de /etc/skel.
- *s shell*: indica cual será el shell por defecto del usuario a la hora de la ejecución de los comandos.

Ejemplo sencillo

````sudo useradd pepe```

## Modificar un usuario creado

```usermod [-c comentario] [-g grupo] [-G grupo[, grupo…]] [-d directorio_home [-m]] [-p contraseña_encriptada] [-e fecha] [-f días] [-l nuevologin] [-L] [-U][-s shell] login```

- c comentario: establece los valores asociados al quinto
campo de la línea añadida al fichero /etc/passwd.
- e fecha.
- f días.
- l nuevologin: se cambia el login anterior por uno nuevo
que se aporte.

Ejemplo
````sudo usermod pepe -d /home/probando -m```

Esto cambia el directirio donde se guarda el usuario

## Borrar un usuario

``` userdel [-r] login ```

La opción -r hace que también se borre el directorio home
del usuario.

Ejemplo

```sudo userdel pepe```

## Que usuarios estan trabajando

Linux es multiusuario por lo que pueden haber varios usuarios trabando al mismo tiempo por lo que para saber quienes estan trabando se utiliza el siguiente comando:

```who [am i] [-u] [-H] [-q]```

- am i: que muestra cual es el usuario actual que está trabajando en dicha terminal. Aunque parezca una tontería esto tiene sentido cuando se trabaja en varias terminales con varios usuarios al mismo tiempo.
- u: muestra la información más relevante de los usuarios
que están conectados al equipo.
- H: imprime las cabeceras.
- q: solo nos muestra el login de los usuarios y el número
de usuarios conectados.

Ejemplo
``who``

## Manejo de grupos, agregar un grupo

``groupadd [-g GID] nombre_grupo``

La opción -g se usa para darle nosotros mismo un identificador de grupo. Debemos de recordar que este siempre debe de ser superior a 1000

Ejemplo
``sudo grupadd alumnos``

## Modificar grupo

``groupmod [-g GID] [-n nuevo_nombre] nombre_grupo.``

La única opción nueva que encontramos es -n que nos da la opción de cambiarle el nombre al grupo por uno nuevo.

Ejemplo
``sudo gruopmod -g 1003 -n alummos_nuevo alumnos``

Aqui cambiamos el codigo del grupo y su nombre

## Añadir usuarios al grupo

``adduser [login_usuario] grupo``

Ejemplo
``sudo adduser alumno alumnos_nuevo``

## Eliminar usuario del grupo

``deluser [login_usuaro] nombre_grupo``

Ejemplo
```sudo deleuser alumno alumnos_nuevo``

## Eliminar grupo

``groupdel nombre_grupo``

Ejemplo:

``sudo group alumnos_nuevo``

## Grupos prederminados

En linux existen grupos prederminados con ciertos privilegios que nos ahorran tener que crearlos nosotros, a continuacion se definien algunos de estos y sus permisos

- adm = Grupo de administración que permite accesos a archivos de
- registro = y comandos como sudo y su.
- users = Grupo de todos los usuarios estándar.
- nobody = Sin privilegios.
- root = Administración sin ninguna restricción sobre todo el sistema.
- tty = Privilegios sobre dispositivos.
- lpadmin = Contiene los privilegios sobre los dispositivos conectados al puerto paralelo

Ahora, para cambiar permisos sin tener que tocar estos permisos, vamos a cambiar tanto el propietario como el grupo propietario de un archivo

### Cambiar propietario de un archivo

``chown nuevo_propietario archivo```

Ejemplo

``linux
chown miguel prueba
ls -l
``

### Cambiar de grupo

``chrgrp grupo archivo``

Ejemplo
``chrgrp alumnos_nuevo prueba``

## Generar una contraseña y ponersela a un usuario

``passwd``. Este comando modifica una contraseña de
usuario o la crea en caso de no tenerla. Una vez creada el sistema la encripta y posteriormente la almacena en el fichero /etc/shadow. El usuario root puede modificar todas las contraseñas usando el comando passwd [usuario], pero un usuario común solo puede modificar su propia contraseña.
``openssl passwd``. Este es un comando criptográfico que permite que la contraseña se genera en formato hash. Su estructura es:

``openssl passwd [opciones] “contraseña_ecnriptar”.``

Las opciones que más emplean son:

- 1 Genera la contraseña basada en MD5.
- 5 Genera la contraseña basada en SHA-256.
- 6 Genera la contraseña basada en SHA-512.

ejemplo:

``openssl passswd -6 1234``
Esto genera una contraseña encriptada

```passwd alumno``
te permite añadir una contrseña al usuario
