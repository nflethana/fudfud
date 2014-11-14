//====================================================
//	Initial Setup code...
//====================================================

var express = require('express');
var routes = require('./routes/routes.js');
var app = express();

app.use(express.bodyParser());
// app.use(express.logger("default"));
// set up cookies
app.use(express.cookieParser());
app.use(express.session({secret: 'thisIsMySecret'}));
app.use('/', express.static(__dirname + "/public",{maxAge:1}));

app.configure(function(){
	app.use(function(req,res,next){
		res.setHeader("Cache-Control", "no-cache, must-revalidate");
		return next();
	});
});

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('port', process.env.PORT || 8080);
// console.log("process.env.PORT: " + process.env.PORT);

//====================================================
//	Routes Setup
//====================================================

app.get('/', routes.getLandingPage);

//====================================================
//	Run the Server
//====================================================

app.listen(app.get('port'));
console.log('Server on ' + app.get('port') + ' ===========================');