# Servicios en Linux

Como obtener la lista de servicio en linux
```systemctk list-unit-file```

Y se pueden ejecutar comando como:
```systemctl [accion] [nombre_del_servicio]```

Acción -> Descripción
```status``` -> Estado del servicio.
```start``` -> Inicia el servicio.
```stop``` -> Detiene el servicio.
```restart``` -> Reinicia el servicio.
```reload``` -> Toma en cuenta los cambios de configuracion,
```pero``` -> sin reiniciar el servicio.
```enable``` -> Habilita el arranque automático con el sistema operativo
```disable``` -> Deshabilita el arranque automático con el sistema operativo
