const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Gestión de empleados');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/empleados', require('./routes/empleados.routes'));

module.exports = app;
