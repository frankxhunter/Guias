# Tips

## Forma de agregar eventos a un elemento

```javascript
document.addEventListener("click", e => {
            // matches comprueba si el elemento coincide con un boton
            if(e.target.matches("button")){
                // closest selecciona el div mas cercano a ese elemento q lo contiene
                const div = e.target.closest('div')
                const id = div.dataset.id

                axios.delete('http://localhost:3000/movies/'+id).then(response => {
                    if(response.success){
                        div.remove()
                    }
                })
            }
        })
```
