const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    usuario: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema);