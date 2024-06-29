// variables para conectarse a la base de datos
const mongoose = require('mongoose')
const url_db = 'mongodb://localhost:27017/Biblioteca'

// conectarse a la base de datos
mongoose.connect(url_db)
    .then(() => {
        console.log('Conexión exitosa')
    })
    .catch((err) => {
        console.log('Conexión fallida')
    })

// esquema de la base de datos
const esquema_libro = new mongoose.Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    language: {
        type: String
    }
})

// creando tabla
const modelo_libro = new mongoose.model("Tabla de libros", esquema_libro)

modelo_libro.create({
    name: "1984",
    year: 1949,
    author: "George Orwell",
    genre: "Science fiction",
    language: "English"
})