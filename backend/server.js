const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const conectarDB = require('./config/db');

const app = express();

// Conectar a MongoDB
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/productos', require('./routes/productos'));
app.use('/clientes', require('./routes/clientes'));
app.use('/ventas', require('./routes/ventas'));

console.log("ANTES DE CARGAR USUARIOS");

const usuariosRoutes = require('./routes/usuarios');

console.log("DESPUES DE CARGAR USUARIOS");

app.use('/usuarios', usuariosRoutes);

// Ruta principal
app.get('/hola', (req, res) => {
    res.send('HOLA');
});


