var data = require("../data.json");
var newFriend;

exports.addFriend = function(req, res) {
	res.render('add');

	var name = req.query.name;
	var description = req.query.description;
	 newFriend = {
		"name": name,
		"description":description,
		"imageURL": 'http://lorempixel.com/400/400/people'
	};
	data["friends"].push(newFriend);
	
}