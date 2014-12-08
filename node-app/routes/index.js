/**
 * Main Web route handling
 */

// Note the use of the exports object.  Each function that we
// assign to exports.XXX is callable by outside modules,
// and we can "hook" to it via routes.XXX.


// These are our key-value stores
var users;
var friends;
var userids;

// We export the init() function to initialize
// our KVS values
exports.init = function(fr,usrs,uids,callback) {
	users = usrs;
	userids = uids;
	friends = fr;

	callback();
};

/**
 * Default index page fetches some content and returns it
 */
exports.index = function(req, res) {
	var t = '';
	
	if (req.session.login) {
		res.redirect("/home");
		return;
	}
	// See if the session object in the cookie has
	// been set, and change title correspondingly
	if (!req.session.loadedData)
		t = 'user login';
	else
		t = 'User login or creation logged in (previously fetched data)';
	
	res.render('index', { title: t });
}
