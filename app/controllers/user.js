var User = require('../model/user');
var userController = function(server){

	server.route('/logout')
		.get(function(req, res){
			req.logout();
			res.redirect('/');

		});
	server.route('/extra-data')
		.get(function(req, res){
			//busca el id si esta logueado
			User.findOne({
				id : req.user.id },
				function(err, user){
					if(user){
						res.redirect('/');
						return;
					}
					else{
						res.render('user/extra-data')
					}

			});


		})
		.post(function(req, res){

			var user = new User({
				id : req.user.id,
				username : req.body.username,
				email : req.body.email,
				first_name : req.user.name.givenName,
				last_name : req.user.name.familyName
			});
			user.save(function(err){
				if (err) {
						console.log("error");
						return;
				}
				else{
					res.redirect("/")
				}
			})



		});

};

module.exports = userController;
