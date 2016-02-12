// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	console.log("hello");
	res.render('homepage',data);
	console.log(data);
};