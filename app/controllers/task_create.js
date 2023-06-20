const fs = require('fs');

// Controlador para manejar la solicitud GET y enviar el archivo HTML
exports.getData = (req, res) => {
    const csrfToken = req.csrfToken(); 
    fs.readFile('app/HTML/task_create.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer el archivo');
      } else {
        // Utiliza req.csrfToken() en lugar de req.csurf
        res.render('task_create', { csrfToken });
      }
    });
  };

// Controlador para manejar la solicitud POST y guardar la tarea en un archivo
exports.saveData = (req, res) => {
    const { tarea } = req.body;

    if (req.csrfToken() !== req.body._csrf) {
        return res.status(403).send('Token CSRF inválido');
    }

    fs.appendFile('tareas.txt', tarea + '\n', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar la tarea');
        } else {
            res.render('Tarea guardada exitosamente');
        }
    });
};