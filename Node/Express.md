# Utilizando el framework express

## Intalando express

```npm i express -E```

## Montar un servidor basico con node

```javascript
const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 3000

// ejemplificando el uso de un middelware
app.use('/pokemon', (req, res, next) => {
  console.log('Este es mi primer middleware')
  // aqui comprobar si tiene cookies
  // trackear la solicitud en la base de datos
})

app.get('/pokemon/charizard', (req, res) => {
  // res.send('<h1>Mi pagina<h1>')
  res.json({ name: 'charizard' })
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', (chunck) => {
    body += chunck.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    res.status(201).json(data)
  })
})

app.use((req, res) => {
  res.send('<h1>Error 404<h1>')
})

app.listen(PORT, () => {
  console.log('Server listening on port: http://localhost:' + PORT)
})

```

*Notas*:

- En la mayoria de los casos no es necesario poner la cabecera pq la detecta automaticamente

### Haciendo un middleware mas complejo y generico

Esto es la forma sencilla de usarlo ```app.use(express.json())``` a continuacion la explicacion:

```javascript
app.use('/pokemon', (req, res, next) => {
  // Haciendo el middleware mas complejo y generico para los post
  if (req.method !== 'POST') {
    return next()
  }
  if (req.headers['content-type'] !== 'application/json') {
    return next()
  }
  let body = ''
  req.on('data', (chunck) => {
    body += chunck.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    req.body = data
    next()
  })
}
)

// luego de ya procesado el cuerpo de la informacion procesarlo en el post
app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

```

### Como trabajar los CORS

```javascript
const express = require('express');
const movies = require('./movies.json');

const ACCEPTED_ORIGINS = ['http://127.0.0.1:5500'];

const app = express();

app.use(express.json());

// Middleware para habilitar CORS
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (ACCEPTED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    next();
});
// prefight para permitir el uso de metodos delete, put, ect...
app.options('/movies/:id', (req, res) => {
    const origin = req.headers.origin;
    console.log('Esto se esta ejecutando')

    if (ACCEPTED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).send();
});


app.get('/movies', (req, res) => {
    const { genre } = req.query;
    if (genre) {
        filteredMovies = movies.filter(movie => movie.genre === genre);
        return res.json(filteredMovies);
    }
    res.json(movies);
});

app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex(movie => movie.id == id);

    if (movieIndex < 0) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    const deletedMovie = movies.splice(movieIndex, 1)[0];
    res.status(200).json(deletedMovie);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server listening on port: http://localhost:' + PORT);
});

```

#### Solucion rapida para los cors

```javascript
// Esto le da que si a todo usando *
app.use(cors())

// De esta forma controla mejor los parametros
app.use(cors({
    origin: (origin, callback)=>{
        const ACCEPTED_ORIGINS = ['http://127.0.0.1:5500', 'http://127.0.0.1:5500/'];

        if(ACCEPTED_ORIGINS.includes(origin)){
            return callback(null, true)
        }
    }
}))

```
