require('dotenv').config();
const express = require('express');
const csurf = require('csurf');


const app = express();
const csrfProtection = csurf({ cookie: true });

const PORT = process.env.PORT || 3000; // Define el puerto a utilizar, o utiliza el valor predeterminado 3000 si no está definido en el archivo .env

const userRouters = require('./app/routers/user');
const mainRouters = require('./app/routers/main');
const task_createRouters = require('./app/routers/task_create');
const contactRouters = require('./app/routers/contact');

app.use(express.json()); // Agrega el middleware para analizar las solicitudes JSON
app.use(csrfProtection);
app.use(userRouters);
app.use(mainRouters);
app.use(task_createRouters);
app.use(contactRouters);



app.listen(PORT, () => {
  console.log('En linea');
});