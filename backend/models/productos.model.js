const mongoose = require('../config/connection');

const  schemaProducto = new mongoose.Schema({
    referencia: {
        type: String,
        require: true,
    },
    nombre: {
        type: String,
        require: true,
        default: 'No existe',
    },
    descripcion: {
        type: String,
        require: true,
    },
    precio: {
        type: Number,
        default: 0,
        min: 0,
    },
    stock: {
        type: Number,
        default: 0,
        min: 0,
    },
    imagen: {
        type: String,
        default: [0, 'No existe imagen relacionada al producto']
    },
    habilitado: {
        type: Boolean,
        default: true
    },
});

const producto = mongoose.model("Producto",schemaProducto);
module.exports = producto;