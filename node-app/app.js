var express = require('express');
var routes = require ('./routes');
var http = require('http');
var path = require('path');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var async = require('async');
var async = require('crypto');

app.set('port', process.env.PORT || 8088);
app.engine('ejs', engine);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use( express.static( path.join( __dirname, 'public' )));
app.use(express.static(__dirname + '/views/stylesheets'));
app.use(express.static(__dirname + '/views/fonts'));
app.use(express.static(__dirname + '/views/images'));
app.use(express.static(__dirname + '/views/js'));

app.use(cookieParser());
app.use(session({
	secret: "thisisaSECRETnets213", 
	}));

/////////////////

var aws = require("./keyvaluestore.js");

var users = new aws('users');
var ratings = new aws('Ratings');
var runners = new aws('runners');
var deliveries = new aws('Deliveries');
var trucks = new aws('Trucks');

users.init(function() {
ratings.init(function() {
runners.init(function() {
deliveries.init(function() {
trucks.init(function() {
			
	routes.init(users,ratings,runners,deliveries,trucks,function() {
		app.get( '/', routes.index );
		app.get( '/index.html', routes.index );
		app.get( '/home', routes.home );
		app.post( '/validate', routes.validate );
		app.post( '/create', routes.create );
		app.get( '/getInfo', routes.getInfo );
		app.get( '/logout', routes.logout );
		app.get( '/engineering', routes.delivery );
		app.get( '/huntsman', routes.delivery );
		app.get( '/harnwell', routes.delivery );
		app.get( '/harrison', routes.delivery );
		app.get( '/rodin', routes.delivery );
		app.get( '/vp', routes.delivery );
		app.get( '/radian', routes.delivery );
		app.get( '/getRunners', routes.getRunners );
		app.get( '/add', routes.add );
		app.post( '/submitRun', routes.submitRun );

		/////////////////////
				
		http.createServer( app ).listen( app.get( 'port' ), function(){
			console.log( 'Open browser to http://localhost:' + app.get( 'port' ));
		} );
	});
});
});
});
});
});
