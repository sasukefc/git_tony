var user = require('../controllers/user.controller');
var passport = require('passport');

module.exports = function(app) {
	//var user = require('../controllers/user.controller');	
	
	app.route('/signup')
		.get(user.renderSignup)
		.post(user.signup);

	app.route('/login')
		.get(user.renderLogin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
		}));

	app.post('/logout', user.logout);

	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/login',
		scope: 'email'
	}));
	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/login',
		seccessRedirect: '/'
	}));

	app.get('/oauth/google', passport.authenticate('google', {
		scope: [
			'http://www.googleapis.com/auth/userinfo.profile',
			'http://www.googleapis.com/auth/userinfo.email'
		],
		failureRedirect: '/login'
	}));
	app.get('/oauth/google/callback', passport.authenticate('google', {
		failureRedirect: '/login',
		successRedirect: '/'
	}));



	app.route('/user')
		.post(user.create)
		.get(user.list);
	// app.route('/user/:username')
	// 	.get(user.read)
	//	.put(user.update)
	//	.delete(user.delete);
	// app.param('username', user.userByUsername);
};