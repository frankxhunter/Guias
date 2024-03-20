# XQuery

Lenguaje de consultas y extraccion de informacion y atributos de archivos xml

Utiliza las expresione XPath, con una sintaxis FLWOR

- For: seleccioa una secuencia de nodos
- Let: enlaza una secuencia a una variable
- Where: filtra los nodos
- Order by: ordena los nodos.
- Return: devolver, lo que nos dara como resultado , se evalua en todos los modulos

```html
<html>
    <body>
        <hl>
            Almacenaje de filmpedia
        </hl>
        <ul>
            { for $x in doc("inventario21.xml")/almacen/peliculas
            where $x/año>1990
            order by %x/titulo Lang="es"
            return <li>{data($x/titulo)}</li>
            }
        </ul>
    </body>
</html>
```

Resultado:

```html
<html>
    <body>
        <hl>
            Almacenaje de filmpedia
        </hl>
        <ul>
            <li>El silencio de los cordeoros</li>
            <li>El cabo del miedo</li>
            <li>Tacones lejanos</li>
            <li>La bella y la bestia</li>
        </ul>
    </body>
</html>
```
