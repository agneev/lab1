// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(req.query.id)
	res.render('newlist');
};