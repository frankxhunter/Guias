# Angular

## Primeros pasos para tener angular

1. Primero es necesario instalar angular como una depedencia global

    ```shh
    npm install -g @angular/cli
    ```

    Para comprobar que esta bien instalado usar el comando

    ```shh
    ng version
    ```

2. Crear un proyecto

    ```shh
    ng new nombre-proyecto
    ```

    >[!TIP]
    >Para comenzar las configuracion basica recomendada en activar css y no activar el Server-Side Rendering(SSR) and Static Site Generation

3. Desplegar la pagina

    ```shh
    ng serve // Desplegar el proyecto
    ng serve --open // Desplegar y abrir el navegador
    ```

4. Crear un nuevo componente

    ```shh
    ng generate component nombre_del_componente
    ```
