var homeController = function(server){

	//ruuta q respondera el server
	server.route('/')
		//se pasa dos parametros peticiones y respuesta
	.get(function(req, res){
			//respuesta alcliente
				// res.send("hola mundo")
			//render respuesta al html
			res.render('home/index');
		});
};

module.exports = homeController
