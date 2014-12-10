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
var polls;
var trucks;

// We export the init() function to initialize
// our KVS values
exports.init = function(usrs,rtngs,rnrs,dlvry,pll,trk,callback) {
	users = usrs;
	ratings = rtngs;
	runners = rnrs;
	deliveries = dlvry;
	polls = pll;
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
	
	//if (req.session.login) {
	//	res.redirect("/home");
	//	return;
	//}

	res.render('profile', { title: t });
}

exports.validate = function(req, res) {
	var t = 'Home';
	
	//if (req.session.login) {
	//	res.redirect("/home");
	//	return;
	//}

	res.send({"username": req.body.username, "success": false, "eMsg": "Incorrect Password!"});
}

exports.create = function(req, res) {
	var t = 'Home';
	
	//if (req.session.login) {
	//	res.redirect("/home");
	//	return;
	//}

	res.send({"username": req.body.username, "success": false, "eMsg": "Incorrect Password!"});
}
