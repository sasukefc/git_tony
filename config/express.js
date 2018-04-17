var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
var session = require('express-session');
var flash = require('connect-flash');
var RedisStore = require('connect-redis');
var config = require('./config');
var passport = require('passport');


module.exports = function() {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }

    // app.use(session({
    //     store: new RedisStore({
    //         host: 'localhost',
    //         port: 6379,
    //         db: 2,
    //         pass: 'redis_password'
    //     });
    //     secret: 'secret_key'
    // }));

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(validator());
    
    app.set('views', './app/views');
    app.set('view engine', 'jade');
    
    
    require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);
    
    app.use(sass({
        src: './sass',
        dest: './public/css',
        outputStyle: 'compressed',
        prefix: '/css'
    }));
    app.use(express.static('./public'));
    return app;
};