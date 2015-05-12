//cargamos la libreria express, swig
var express = require('express'),
		swig = require('swig'),
		passport = require('passport'),
		session = require('express-session');
		cookierParser = require('cookie-parser');
//instanciamos a express
var server = express();

//cookier antes de la session
server.use(cookierParser)
//se configura session antes de passport
server.use(session({secret: 'mi clave'}));
//configuracion de passport
server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser()

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//express usara como swig como motor de template y renderiza ; luego que el moto de vista serae html
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname+ '/app/views');

//usamos el metodo static d e expres le pasamos la ruta
server.use(express.static('./public'));
//exportamos home.js
require('./app/controllers/home')(server);


server.listen(8000);
