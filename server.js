// ############################################################################
// File Name: server.js
// Description:
//  Simple node.js application using express listening to port 80
// Author: Peter Leung (pleungms@hotmail.com)
// Modification history
//  Author         Date       Description
//  -------------- ---------- -------------------------------------------------
//  Peter Leung    21/08/2018 Initial version
//
// ############################################################################
var express = require('express');
var app = express();

// Obtain the environment the application will run in
var env = process.env.NODE_ENV || 'dev';
var config = require('./config')[env];

// Allow openning static html pages
app.use(express.static('.'));

// Root folder of the html
var options = {
    root: __dirname + '/public'
};

// Routes
// Always serve the index.html
app.get('*', function(req, res) {
  res.sendFile('index.html', options, function(err) {
	  if (err) {
		  next(err);
	  }
  }); // load the angular page, will handle the page changes on the front-end
});
// *** Can remove below ***
//app.get('/', function (req, res) {
//  res.send('Hello World! [from pleungtestapp] from CI/CD build v2!');
//});
// ***

// Create the server listening for http requests
app.listen(config.server.port, function () {
  console.log('Example app listening on port ' + this.address().port);
});
