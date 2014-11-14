// //====================================================
// //	Imports
// //====================================================

// var AWS = require('aws-sdk');
// AWS.config.loadFromPath('config.json');
var uuid = require('node-uuid');
var SHA3 = require('crypto-js/sha3');
var async = require('async');
var logger = require('tracer').colorConsole();
var AWS = require('aws-sdk');
if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_KEY) {
	AWS.config = new AWS.Config({
	  accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_KEY, region: 'us-east-1'
	});
} else {
	// AWS.config.loadFromPath('./config.json');
}
var dynamodb = new AWS.DynamoDB();

// //====================================================
// //	Database Methods
// //====================================================

var database = {
	
};
module.exports = database;
