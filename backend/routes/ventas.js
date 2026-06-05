const express = require('express');
const router = express.Router();

const Venta = require('../models/Venta');

// Obtener ventas
router.get('/', async (req, res) => {

    const ventas = await Venta.find();

    res.json(ventas);

});

router.post('/', async (req, res) => {

    const venta = new Venta(req.body);

    await venta.save();

    res.json(venta);

});

router.get('/mayores-10000', async (req, res) => {

    const ventas = await Venta.find({
        total: { $gt: 10000 }
    });

    res.json(ventas);

});

router.get('/total-vendido', async (req, res) => {

    const resultado = await Venta.aggregate([
        {
            $group: {
                _id: null,
                totalVendido: { $sum: '$total' }
            }
        }
    ]);

    res.json(resultado);

});

// Crear venta
router.get('/crear-prueba', async (req, res) => {

    const venta = new Venta({
        cliente: 'Juan Pérez',
        total: 15000
    });

    await venta.save();

    res.json(venta);

});

module.exports = router;