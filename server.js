//cargamos la libreria express
var express = require('express');
//instanciamos a express
var server = express();

//exportamos home.js
require('./app/controllers/home')(server);


server.listen(8000);
