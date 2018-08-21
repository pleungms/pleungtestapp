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
// Note that port 80 will throw a "Error: listen EACCES 0.0.0.0:80" excemption
// on your local machine, for testing use another port such as 3000
var iPortNum = 80;

var express = require('express');
var app = express();

// Routes
app.get('/', function (req, res) {
  res.send('Hello World! [from pleungtestapp] vInitial');
});

// Create the server
app.listen(iPortNum, function () {
  console.log('Example app listening on port ' + this.address().port);
});
