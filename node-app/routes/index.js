/**
 * Main Web route handling
 */

// Note the use of the exports object.  Each function that we
// assign to exports.XXX is callable by outside modules,
// and we can "hook" to it via routes.XXX.

var async = require('async');

// These are our key-value stores
var users;
var ratings;
var runners;
var deliveries;
var trucks;

// We export the init() function to initialize
// our KVS values
exports.init = function(usrs,rtngs,rnrs,dlvry,trk,callback) {
	users = usrs;
	ratings = rtngs;
	runners = rnrs;
	deliveries = dlvry;
	trucks = trk;

	callback();
};

/**
 * Default index page fetches some content and returns it
 */
exports.index = function(req, res) {
	var t = 'Füd-Füd';
	
	if (req.session.login) {
		res.redirect("/home");
		return;
	}
	// See if the session object in the cookie has
	// been set, and change title correspondingly
	if (!req.session.loadedData)
		t = 'Füd-Füd';
	else
		t = 'Füd-Füd (previously fetched data)';
	
	res.render('index', { title: t });
}

exports.home = function(req, res) {
	var t = 'Home';
	
	if (!req.session.login) {
		res.redirect("/");
		return;
	}

	res.render('profile', { title: t });
}

exports.validate = function(req, res) {
	users.exists(req.body.username, function(err, data){
    	if (err) {
    		console.log("Error Validate 1");
    	}
    	else {
    		if (data) {
    			users.get(req.body.username, function(err, val) {
    				if (err) {
    					console.log("Error Validate 2");
    				}
    				else if (JSON.parse(val).password == req.body.password){
    					req.session.login = true;
    					req.session.username = req.body.username;
    					req.session.fullname = JSON.parse(val).fullname;

    					res.send({"username": req.body.username, "success": true, "eMsg": ""});
    				}
    				else {
    					res.send({"username": req.body.username, "success": false, "eMsg": "Incorrect Password!"});
    				}
    			});
    		} else {
    			res.send({"username": req.body.username, "success": data, "eMsg": "Incorrect Username!"});
    		}
    	}
    });
}

exports.create = function(req, res) {
	users.exists(req.body.username, function(err, data){
		if (err) {
			console.log("Error Create 1");
		}
		else {
			if (data) {
				res.send({"success": false, "eMsg": "Email already exists!"});
			}
			else {
				var val = req.body.val;
				val.rating = 5;
				val.total = 0;
				console.log(req.body.username);
				console.log(JSON.stringify(val));
				users.put(req.body.username, JSON.stringify(val), function(err, data) {
					if (err) {
						console.log("Error Create 2");
						console.log(err);
					}
					else {
						req.session.login = true;
    					req.session.username = req.body.username;
    					req.session.fullname = val.fullname;
						res.send({"success": true, "eMsg": ""});
					}
				});
			}
		}
	});
}

exports.logout = function(req, res) {
	req.session.login = false;
    req.session.username = null;
    req.session.fullname = null;
    res.send({});
}

exports.getInfo = function(req, res) {
	users.get(req.session.username, function(err, val){
		if (err) {
			console.log("Error GetInfo 1");
		}
		else {
			ratings.getSet(req.session.username, function(err2, data2) {
				if (err2) {
					console.log("Error GetInfo 2");
				} else {
					var returnData = JSON.parse(val);
					returnData.password = null;
					returnData.username = req.session.username;
					returnData.allratings = data2;
					console.log(returnData);
					res.send(returnData);
				}
			});
		}
	});
}

exports.getRunners = function(req, res) {
	if (!req.session.login) {
		res.redirect("/");
		return;
	}

	var location = req.session.location.toUpperCase();
	console.log(location);

	runners.getSet(location, function(err, val) {
		if (err) {
			console.log("error getting location runs");
		} else {
			console.log(val);
			if (val == null) {
				var returnObj = {
					"location":  req.session.location,
					"data": null
				}
				res.send(returnObj);
			} else {
				var returnData = [];
				async.each(val, function(obj, callback) {
					var run = JSON.parse(obj);
					var username = run.username;
					users.get(username, function(err, val) {
						if (err) {
							console.log("Error getting user");
						} else {
							var user = JSON.parse(val);
							// console.log(user);
							run.userInfo = user;
							// console.log(run);
							returnData.push(run);
							callback();
						}
					});
				}, function(err) {
					if (err) {
						console.log(err);
					} else {
						var returnObj = {
							"location":  req.session.location,
							"data": returnData
						}
						// console.log(returnObj);
						res.send(returnObj);
					}
				});
			}
		}
	});
}

exports.add = function(req, res) {
	var t = 'Add Füd-Run';
	
	if (!req.session.login) {
		res.redirect("/");
		return;
	}

	res.render('newRun', { title: t });
}

exports.delivery = function(req, res) {
	var location = req.route.path.split('/')[1];
	location = location.charAt(0).toUpperCase() + location.slice(1);
	var t = 'Add Füd-Run | ' + location;

	if (!req.session.login) {
		res.redirect("/");
		return;
	}
	req.session.location = location;
	res.render('delivery', { title: t });
}

exports.menu = function(req, res) {
	if (!req.session.login) {
		res.redirect("/");
		return;
	}

	req.session.potruck = req.query.truck;
	req.session.pousername = req.query.username;
	req.session.pophone = req.query.phone;

	res.render('menu', { 
		title: 'Place Order',
		truck: req.query.truck,
		username: req.query.username,
		phone: req.query.phone
	});
};

exports.getMenu = function(req, res) {
	res.send({});
};

exports.postRating = function(req, res) {
	if (!req.session.login) {
		res.redirect("/");
		return;
	}
	var body = req.body;
	var ratingUser = body.userRating;
	var numStars = body.rating;
	var comment = body.comment;
	var ratedUser = body.userRated;

	var rating = {};
	rating.ratingUser = ratingUser;
	rating.numStars = numStars;
	rating.comment = comment;
	rating.ratedUser = ratedUser;

	ratings.addToSet(ratedUser, JSON.stringify(rating), function(err, data) {
		if (err) {
			console.log("error putting user rating");
			console.log(err);
		} else {
			users.get(ratedUser, function(err2, data2) {
				if (err2) {
					console.log("error postRating 2");
				}
				else {
					console.log("=============new data=============");
					var newData = JSON.parse(data2);
					var crating = newData.rating;
					var ctotal = newData.total;
					var newtotal = ctotal + 1;
					newData.total = newtotal;
					var newrating = ((crating * ctotal) + parseInt(numStars)) / newtotal;
					newData.rating = newrating;
					console.log(crating);
					console.log(ctotal);
					console.log(((crating * ctotal) + numStars));
					console.log(newtotal);
					console.log(newrating);
					console.log(numStars);
					users.put(ratedUser, JSON.stringify(newData), function(err3, data3) {
						if (err3) {
							console.log("Error postRating 3");
						}
						else {
							res.send({"success":true});
						}
					});
				}
			});
		}
	});
};

exports.getRatings = function(req, res) {
	if (!req.session.login) {
		res.redirect("/");
		return;
	}
	var username = req.session.pousername;
	users.get(username, function(err, data) {
		if (err) {
			console.log("Error getRatings 1");
		}
		else {
			ratings.getSet(username, function(err2, data2) {
				if (err2) {
					console.log("Error getRatings 2");
				} else {

					var returnData = JSON.parse(data);
					returnData.password = null;
					returnData.username = username;
					returnData.allratings = data2;
					returnData.truck = req.session.potruck;
					console.log(returnData);
					res.send(returnData);
				}
			});
		}
	});
};

exports.submitRun = function(req, res) {
	var locations = req.body.location;
	var t1 = new Date(parseFloat(req.body.pickuptime));
	var t2 = new Date(parseFloat(req.body.eta));
	var json_data = {
		pickuptime: t1,
  		eta: t2,
  		truck: req.body.truck,
  		username: req.session.username
	};

	function async(args, callback) {
		console.log(args);
		runners.addToSet(args, JSON.stringify(json_data), function(err, data){
			if (err) {
				console.log("Error submitRun 1");
			}
			else {
				callback(true);
			}
		});
		setTimeout(function() { callback(false); }, 1000);
	}


	var count = locations.length;
	for (var i = 0; i < locations.length; i++) {
		async(locations[i].toUpperCase(), function(complete){
			count--;
			if(count == 0) {
			    res.send({"success": true, "eMsg": ""});
			}
		});
	}
}
