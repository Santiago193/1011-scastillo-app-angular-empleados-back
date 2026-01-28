import express from 'express';
import cors from 'cors';

import './database.js';
import empleadosRoutes from './routes/empleados.routes.js';

const app = express();

// 🔥 MIDDLEWARES (orden importa)
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

// 🔥 RUTAS
app.use('/api/empleados', empleadosRoutes);

// 🔎 TEST
app.get('/ping', (req, res) => {
  res.send('pong');
});

// 🚀 SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
