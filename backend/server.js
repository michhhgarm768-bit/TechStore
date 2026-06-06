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

// Ruta principal
app.get('/', (req, res) => {
    res.send('API TechStore funcionando');
});
app.get('/test', (req, res) => {
    res.send('Servidor funcionando');
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});