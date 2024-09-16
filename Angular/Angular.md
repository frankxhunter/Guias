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
    ng g c nombre_del_componente

    ```

5. Crear un nuevo servicio

    ```shh
    ng generate service nombre_del_servicio
    ng g s nombre_del_servicio

    ```

    Un servicion es una forma de manejar datos o logica de forma centralizada o global
    Para obtener acceso a un sevicion desde un componente se hace lo siguiente

    ```ts
    _miServicio = inject(MiServicio)
    
    ```

6. Crear un pipe personalizado

    ```shh
    ng generate pipe nombre_del_pipe
    ng g p nombre_del_pipe

    ```

    Los pipes son funciones que se usan en las plantillas html para formatear la informacion que se muestra

    ```html
    <!-- Ejemplo de uso de un pipe -->
    <p>{{nombre | upperCase }}</p>
    ```

    Ejemplos de pipes
    Claro, aquí tienes una lista resumida de los principales pipes en Angular y sus usos:

    1. **DatePipe**: Formatea una fecha.

        ```html
        {{ dateValue | date:'shortDate' }}
        ```

    2. **UpperCasePipe**: Convierte texto a mayúsculas.

        ```html
        {{ 'hello' | uppercase }}
        ```

    3. **LowerCasePipe**: Convierte texto a minúsculas.

        ```html
        {{ 'HELLO' | lowercase }}
        ```

    4. **CurrencyPipe**: Formatea un número como moneda.

        ```html
        {{ value | currency:'USD' }}
        ```

    5. **DecimalPipe**: Formatea un número con decimales.

        ```html
        {{ value | number:'1.2-2' }}
        ```

    6. **PercentPipe**: Convierte un número a porcentaje.

        ```html
        {{ value | percent }}
        ```

    7. **JsonPipe**: Convierte un objeto a una cadena JSON.

        ```html
        {{ value | json }}
        ```

    8. **SlicePipe**: Extrae una sección de una lista o cadena.

        ```html
        {{ array | slice:1:3 }}
        ```

    9. **AsyncPipe**: Desenvuelve un valor de una promesa o un observable.

        ```html
        {{ observableValue | async }}
        ```

    10. **TitleCasePipe**: Convierte una cadena a "Title Case".

        ```html
        {{ 'angular is awesome' | titlecase }}
        ```
