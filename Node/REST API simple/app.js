const express = require('express')
const crypto = require('node:crypto')
const {validateMovie, validatePartialMovie} = require('./Schema/movie')

const movies = require('./movies.json')

const app = express()
app.disable('x-powered-by')

app.use(express.json())

app.get('/movies', (req, res) => {
    const {genre} = req.query
    if(genre){
        filteredMovies = movies.filter(movie => movie.genre === genre)
        return res.json(filteredMovies)
    }
    res.json(movies)
})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params
    const movie = movies.find(movie => movie.id == id)
    console.log(id)
    if(movie){
        res.json(movie)
    }
    else {
        res.status(404).end('Error 404: Movie not found')
    }
})

app.post('/movies', (req, res) => {
    
    const result = validateMovie(req.body)

    if(result.error){
        res.status(400).json({error: JSON.parse(result.error.message)}) 
    }

    const newMovie = {
        id: crypto.randomUUID(),
       ...result.data
    }
    movies.push(newMovie)
    res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body)
    if(!result.success){
        return res.status(400).json({error: JSON.parse(result.error.message)})
    }
    const { id } = req.params

    indexMovie = movies.findIndex(i => i.id == id)

    if(indexMovie < 0){
        return res.status(404).json({error: "Movie not found"})
    }
    
    const movie = {
        ...movies[indexMovie],
        ...result.data
    }

    movies[indexMovie] = movie

    return res.status(200).json(movie)


})

app.use((req, res) => {
    res.status(404).json({"error": "404"})
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log('Server listening on port: http://localhost:' + PORT)
})
