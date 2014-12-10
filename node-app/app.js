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

app.set('port', process.env.PORT || 8088);
app.engine('ejs', engine);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use( express.static( path.join( __dirname, 'public' )));
app.use(express.static(__dirname + '/views/stylesheets'));



app.use(cookieParser());
app.use(session({
	secret: "thisisaSECRETnets213", 
	}));

/////////////////

var aws = require("./keyvaluestore.js");

var users = new aws('Users');
var ratings = new aws('Ratings');
var runners = new aws('Runners');
var deliveries = new aws('Deliveries');
var polls = new aws('Polls');
var trucks = new aws('Trucks');

users.init(function() {
ratings.init(function() {
runners.init(function() {
deliveries.init(function() {
polls.init(function() {
trucks.init(function() {
			
	routes.init(users,ratings,runners,deliveries,polls,trucks,function() {
		app.get( '/', routes.index );
		app.get( '/index.html', routes.index );

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
});
