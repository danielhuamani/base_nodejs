//ESTRATEGIA parahacer un auntenticacion con face
var passport = require('passport'),
		FacebookStrategy = require('passport-facebook').Strategy;

//traemos el server de express
var facebookConnection = function(server){
	// se dos parametros un objeto y un callback
	passport.use(new FacebookStrategy({
		//se necesitan 3 atributos
		clientID        : '579887472112702',
 		clientSecret    : '3c256446dc89cb1ebfc288eb7250f1e3',
 		//despues de loguear a que url se manda
  	callbackURL     : 'http://localhost:8006/auth/facebook/callback'
	},
		function(accessToken, RefreshToken, profile, done){

	      done(null, profile);


		}));
	//se envia  a la url auth/facebook y se indica con que red se logueara
	server.get('/auth/facebook', passport.authenticate('facebook'));
	//remplaza al callbackurl
	server.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/',
                                   failureRedirect: '/login' }));


};




module.exports = facebookConnection;
