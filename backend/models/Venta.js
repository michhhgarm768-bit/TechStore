const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({

    cliente: {
        type: String,
        required: true
    },

    producto: {
        type: String,
        required: true
    },

    total: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Venta', VentaSchema);