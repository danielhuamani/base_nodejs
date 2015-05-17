//cargamos la libreria express, swig
var express = require('express'),
		swig = require('swig'),
		passport = require('passport'),
		session = require('express-session');
		cookierParser = require('cookie-parser');
//instanciamos a express
var server = express();

//borrar cache
swig.setDefaults({

	cache : false
})
//cookier antes de la session
server.use(cookierParser())
//se configura session antes de passport
server.use(session({secret: 'mi clave'}));
//configuracion de passport
server.use(passport.initialize());
//guarda la sesion sobre la sesion de express
//cuando se aunthentica se guarda la cookie
server.use(passport.session());



passport.serializeUser(function(user, done){
    done(null, user); //req.user
})


passport.deserializeUser(function(user, done){
    done(null, user); //req.user
})

//express usara como swig como motor de template y renderiza ; luego que el moto de vista serae html
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname+ '/app/views');

//usamos el metodo static d e expres le pasamos la ruta
server.use(express.static('./public'));
//exportamos home.js, user
require('./app/controllers/home')(server);
require('./app/controllers/user')(server);
//connection

require('./app/connections/facebook')(server)


server.listen(8006);
