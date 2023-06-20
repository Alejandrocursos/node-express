const { json } = require('body-parser');
const fs = require('fs');

const filePath = './app/BD.json';


exports.id = (req, res) => {

    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data)

    if (jsonData.find(item => item.id == req.params.id)) {
        let id = parseInt(req.params.id) - 1
        res.send(jsonData[id]);
    } else {
        res.send('Error, no existe coincidencia con ese id')
    }

}


exports.get = (req, res) => {

    const data = fs.readFileSync(filePath, 'utf8');
    res.send(JSON.parse(data));
}



exports.post = (req, res) => {

    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(data);
            const keys = Object.keys(jsonData);
            const id = keys.length + 1;

            const json = {
                id: id,
                title: req.params.title,
                description: req.params.description
            };

            jsonData.push(json);
            const updatedData = JSON.stringify(jsonData, null, 2);
            fs.writeFileSync(filePath, updatedData);

            res.send(
                updatedData
            );

        } catch (error) {
            console.error('Error al leer o analizar el archivo JSON:', error);
        }

    } else {
        try {

            const json = {
                id: 1,
                title: req.params.title,
                description: req.params.description
            };

            jsonData.push(json);
            const updatedData = JSON.stringify(jsonData, null, 2);
            fs.writeFileSync(filePath, updatedData);

        } catch (error) {
            console.error('Error al leer o analizar el archivo JSON:', error);
        }
    }


}


exports.update = (req, res) => {
    if (fs.existsSync(filePath)) {
        try {

            const data = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(data);

            if (jsonData.find(item => item.id == req.params.id)) {
                

                let updatedData = jsonData.map(item => {
                    console.log(item.id);
                    if (item.id == req.params.id) {
                        console.log('entra');
                      return {
                        ...item,
                        title: req.params.title,
                        description: req.params.description
                      };
                      
                    }
                    return item;
                  });

                updatedData = JSON.stringify(updatedData);
                fs.writeFileSync(filePath, updatedData);

                res.send(
                    updatedData
                );
            }



        } catch (error) {
            console.error('Error al leer o analizar el archivo JSON:', error);
        }

    } else {
        res.send(
            'El archivo no existe'
        );
    }
}



exports.delete = (req, res) => {
    if (fs.existsSync(filePath)) {
        try {

            const data = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(data);

            if (jsonData.find(item => item.id == req.params.id)) {
                

                jsonData.splice(req.params.id-1,1)

                updatedData = JSON.stringify(jsonData);
                fs.writeFileSync(filePath, updatedData);

                res.send(
                    updatedData
                );
            }



        } catch (error) {
            console.error('Error al leer o analizar el archivo JSON:', error);
        }

    } else {
        res.send(
            'El archivo no existe'
        );
    }
}