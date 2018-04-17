module.exports = {
	debug: true,
	mongoUri: 'mongodb://localhost/test',
	sessionSecret: 'dev_secret_key',
	facebook: {
		clientID: '239579363279972',
		clientSecret: 'cf0c122651c5ca707066323521666106',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: '415996887120-va74liq8bmp513s0bgin7ghrshk4l861.apps.googleusercontent.com',
		clientSecret: 'MUhyjZKWNHewT5xzzFUrA7gG',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	}
}