require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000; // Define el puerto a utilizar, o utiliza el valor predeterminado 3000 si no está definido en el archivo .env

const userRouters = require('./app/routers/user');
const mainRouters = require('./app/routers/main');
const aboutRouters = require('./app/routers/about');
const contactRouters = require('./app/routers/contact');

app.use(express.json()); // Agrega el middleware para analizar las solicitudes JSON
app.use(userRouters);
app.use(mainRouters);
app.use(aboutRouters);
app.use(contactRouters);

app.listen(PORT, () => {
  console.log('En linea');
});