# Como importar axios

## A traves de la consola
```
 npm install axios
```


## Poner en el head del html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

# Como usar axios

## Solicitud get
axios.get('https://api.example.com/data')
     .then(response => {
       // Maneja la respuesta aquí
       console.log(response.data);
     })
     .catch(error => {
       // Maneja los errores aquí
       console.error(error);
     });
