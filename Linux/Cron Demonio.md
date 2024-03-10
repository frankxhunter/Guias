# Cron automatizador de tareas para linux

## Configuracion incial

```linux
//Revisar si instalado, sino lo isntalamos
dpkg -l cron

//Revisar si esta activo
systemctl status cron

//Si no está activo, lo activamos con el comando:
systemctl start cron

//Si sí que está activo, lo reiniciamos para empezar de cero con el comando:
systemctl restart cron

//Ya podemos empezar a trabajar con esta utilidad
```
