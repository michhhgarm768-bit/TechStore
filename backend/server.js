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
const usuariosRoutes = require('./routes/usuarios');

console.log("Cargando rutas de usuarios...");
app.use('/usuarios', usuariosRoutes);
// Ruta principal
app.get('/test', (req, res) => {
    res.send('Servidor funcionando');
});
app.get('/', (req, res) => {
    res.send('API TechStore funcionando');
});
const PORT = process.env.PORT || 8000;

console.log("Rutas cargadas correctamente");

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
