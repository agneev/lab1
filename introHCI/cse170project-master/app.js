
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var splash = require('./routes/splash');
var about = require('./routes/about');
var contact = require('./routes/contact');
var help = require('./routes/help');
var homepage = require('./routes/homepage');
var newlist = require('./routes/newlist');
var newuser_homepage = require('./routes/newuser_homepage');
var showlist = require('./routes/showlist');
var visualization = require('./routes/visualization');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/splash',splash.view);
app.get('/about', about.view);
app.get('/contact', contact.view);
app.get('/help', help.view);
app.get('/homepage', homepage.view);
app.get('/newuser_homepage', newuser_homepage.view);
app.get('/newlist', newlist.view);
app.get('/showlist',showlist.view);
app.get('/visualization', visualization.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
