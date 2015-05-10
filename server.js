//cargamos la libreria express, swig
var express = require('express'),
		swig = require('swig');
//instanciamos a express
var server = express();

//express usara como swig como motor de template y renderiza ; luego que el moto de vista serae html
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname+ '/app/views');

//usamos el metodo static d e expres le pasamos la ruta
server.use(express.static('./public'));
//exportamos home.js
require('./app/controllers/home')(server);


server.listen(8000);
