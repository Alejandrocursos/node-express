require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser')



const app = express();
const PORT = process.env.PORT || 3000; // Define el puerto a utilizar, o utiliza el valor predeterminado 3000 si no está definido en el archivo .env

const tareaRouters = require('./app/routers/tarea');


app.use(express.json()); // Agrega el middleware para analizar las solicitudes JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(tareaRouters);


app.listen(PORT, () => {
  console.log('En linea');
});