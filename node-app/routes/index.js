/**
 * Main Web route handling
 */

// Note the use of the exports object.  Each function that we
// assign to exports.XXX is callable by outside modules,
// and we can "hook" to it via routes.XXX.


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
			console.log("Error GetInfo");
		}
		else {
			var obj = JSON.parse(val);
			obj.password = null;
			obj.username = req.session.username;
			res.send(obj);
		}
	});
}

exports.getRunners = function(req, res) {
	// TODO
}

exports.add = function(req, res) {
	var t = 'Add Füd-Run';
	
	if (!req.session.login) {
		res.redirect("/");
		return;
	}

	res.render('newRun', { title: t });
}

exports.submitRun = function(req, res) {
	// TODO
}
