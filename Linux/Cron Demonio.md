# Cron automatizado de tareas para linux

## Configuración inicial

```console
//Revisar si instalado, sino lo instalamos
dpkg -l cron

//Revisar si esta activo
systemctl status cron

//Si no está activo, lo activamos con el comando:
systemctl start cron

//Si sí que está activo, lo reiniciamos para empezar de cero con el comando:
systemctl restart cron

//Ya podemos empezar a trabajar con esta utilidad
```

## Como usarla

Para programar la ejecución de este script utilizando cron, sigue estos pasos:

1. Abre el archivo de cron con el comando **crontab -e**.

2. Agrega una línea al archivo crontab para programar la ejecución del script. La sintaxis de cron es la siguiente:

```console
minute hour day_of_month month day_of_week command_to_run
```

En tu caso, querrías que se ejecute todos los sábados a las 2:00 a.m., lo que se vería así:
``0 2 ** 6 /ruta/completa/del/script/backup_script.sh``
Donde:

- ``0`` es el minuto (en este caso, 0).
- ``2`` es la hora (en este caso, 2:00 a.m.).

- ``*`` indica todos los días del mes y todos los meses.
- ``6`` indica el sábado (0 para domingo, 1 para lunes, ..., 6 para sábado).
- ``/ruta/completa/del/script/backup_script.sh`` es la ruta completa del script de copia de seguridad que creaste anteriormente.
- ``Guardar y salir:`` Guarda los cambios en el archivo crontab y ciérralo. Cron se encargará de ejecutar el script de copia de seguridad todos los sábados a las 2:00 a.m.
