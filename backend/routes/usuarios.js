const express = require('express');
const router = express.Router();

const Usuario = require('../models/Usuario');

router.get('/prueba', (req, res) => {
    res.json({
        mensaje: 'Ruta usuarios funcionando'
    });
});

router.post('/registro', async (req, res) => {

    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json(usuario);

});

router.post('/login', async (req, res) => {

    const usuario = await Usuario.findOne({

        usuario: req.body.usuario,
        password: req.body.password

    });

    if(usuario){

        res.json({
            mensaje: 'Login correcto'
        });

    }else{

        res.status(401).json({
            mensaje: 'Usuario o contraseña incorrectos'
        });

    }

});

module.exports = router;