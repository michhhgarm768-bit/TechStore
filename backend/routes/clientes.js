const express = require('express');
const router = express.Router();

const Cliente = require('../models/Cliente');

// Obtener clientes
router.get('/', async (req, res) => {

    const clientes = await Cliente.find();

    res.json(clientes);

});

// Crear cliente
router.post('/', async (req, res) => {

    const cliente = new Cliente(req.body);

    await cliente.save();

    res.json(cliente);

});

router.get('/crear-prueba', async (req, res) => {

    const cliente = new Cliente({
        nombre: 'María López',
        telefono: '6671234567',
        correo: 'maria@gmail.com'
    });

    await cliente.save();

    res.json(cliente);

});

// Actualizar cliente
router.put('/:id', async (req, res) => {

    const cliente = await Cliente.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(cliente);

});

// Eliminar cliente
router.delete('/:id', async (req, res) => {

    await Cliente.findByIdAndDelete(req.params.id);

    res.json({
        mensaje: 'Cliente eliminado'
    });

});

module.exports = router;