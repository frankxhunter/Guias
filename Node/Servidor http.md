# Servidores http

```javascript
const http = require('node:http')
const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    console.log('request received:', req.url)
    res.statusCode = 200
    res.end('<h2>Hello world</h2>')
  } else if (req.url === '/hola') {
    res.statusCode = 200
    res.end('<h2>Hola mundo</h2>')
  } else {
    res.statusCode = 404
    res.end('<h1>Error 404<h1>')
  }
})

server.listen((desiredPort), () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})
```

## Status code

- 100-199: Respuestas informativas
- 200-299: Respuestas satisfactorias
- 300-399: Redirecciones
- 400-499: Errores del cliente
- 500-599: Errores del servidor

*Nota*: para ver todos los codigos entrar a [Cats](https://http.cat/)
