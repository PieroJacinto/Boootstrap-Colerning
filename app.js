// Requerimos express
const express = require('express');
// Ejecutamos express
const app = express();
// Definimos carpeta de archivos estáticos
app.use(express.static('public'));
// levantamos y escuchamos el puerto 3001
app.listen(3001, ()=>{
    console.log("Servidor corriendo en el puerto 3001");
});
// Mostramos la vista del home
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});