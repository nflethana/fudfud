//====================================================
//	Import libraries
//====================================================

// var db = require('../models/awsdb.js');
var request = require('request');
var logger = require('tracer').colorConsole();
var db = require('../models/awsdb.js');

//====================================================
//	Handle First Step for User Connections
//====================================================

var getLandingPage = function(req, res) {
	// res.render('landingPage.ejs', {message: null, 
	// 	                           name: "Füd Füd", 
	// 	                           username: null, 
	// 	                           useremail: null});
	res.render('mainView.html');
}

//====================================================
//	Define Routing Functions
//====================================================

var routes = {
	getLandingPage: getLandingPage
};
module.exports = routes;