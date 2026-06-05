const express = require('express');
const router = express.Router();

const Producto = require('../models/Producto');

// Obtener productos
router.get('/', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});



// Crear producto
router.post('/', async (req, res) => {

    const producto = new Producto(req.body);

    await producto.save();

    res.json(producto);

});

router.get('/crear-prueba', async (req, res) => {

    const producto = new Producto({
        nombre: 'Laptop HP',
        descripcion: 'Laptop para oficina',
        precio: 15000,
        stock: 10
    });

    await producto.save();

    res.json(producto);

});

router.get('/stock-bajo', async (req, res) => {

    const productos = await Producto.find({
        stock: { $lt: 5 }
    });

    res.json(productos);

});


// Actualizar producto
router.put('/:id', async (req, res) => {

    const producto = await Producto.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(producto);

});





// Eliminar producto
router.delete('/:id', async (req, res) => {

    await Producto.findByIdAndDelete(req.params.id);

    res.json({
        mensaje: 'Producto eliminado'
    });

});

module.exports = router;