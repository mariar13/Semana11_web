
//-----------Importar modulos e instancias-----//

// Importar modulo
const express=require('express');

//Intanciar bodyparser despues de instalarlo en git bash
 var bodyParser = require('body-parser');

 // importar file system para poder crear archivos txt, ya viene instalado pero toca instanciarlo
 var fs = require('fs');

//-----Configuracion de la app-----------//

 //Instanciar app
const app=express();

// configuración body parser para poder usar variables post en el body
app.use(bodyParser.urlencoded({ extended: true }));

//definir el puerto_ usualmente el 3000
const port = 3000;

//Aqui es donde se define la carpeta como publica
app.use(express.static('public'));


/* acciones del usuario al servidor
app.get(); //traer informacion del servidor
app.post(); //enviar nueva infromacion lo envia el usuario al servidor
app.put(); // modificar algo que ya esta
app.delete(); //eliminar alguna informacion que ya esta
*/

// la ruta recibe dos cosas '/aque va a responder', la funcion a la cual va a responder
//definir ruta tipo get y su funcion 
app.get('/', (request, response) =>{
console.log('alguien entro a la ruta inicial');
response.sendFile(__dirname +'/public/home.html');
});


// inicar servidor en el puerto definido anteriormente
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});