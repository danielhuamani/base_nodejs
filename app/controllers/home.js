var homeController = function(server){

	//ruuta q respondera el server
	server.route('/')
		//se pasa dos parametros peticiones y respuesta
	.get(function(req, res){
			//respuesta alcliente
			//si esta logueado
			if (req.user) {
					var full_name = req.user._json.name;
					var url_foto = "http://graph.facebook.com/"+ req.user.id + "/picture";
					res.render('home/index', {
						full_name : full_name,
						url_foto : url_foto
					});
			}
			else{
				// res.send("hola mundo")
				//render respuesta al html
				res.render('home/index');
			}


		});
};

module.exports = homeController
