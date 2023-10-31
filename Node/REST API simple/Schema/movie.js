const zod = require('zod')

const movieSchema = zod.object({
    title: zod.string({
        invalid_type_error: 'Movie title must be a string',
        required_error: 'Movie title is required'
    }),
    year: zod.number().int().min(1900).max(2023),
    director: zod.string(),
    duration: zod.number().positive(),
    genre: zod.array(zod.enum(['action', 'terror', 'comedia', 'drama', 'Animación']))
})

function validateMovie(object){
    return movieSchema.safeParse(object)
}
function validatePartialMovie(object) {
    return movieSchema.partial().safeParse(object) 
    // partial convierte todos los parametros en opcionales
}
module.exports = {validateMovie, validatePartialMovie}