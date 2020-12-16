'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
app.set('port', process.env.PORT || port)

mongoose.Promise = global.Promise;

// THIS LINE TO CONNECT WITHOUT DB
app.listen(app.get('port'), () => 
{
		console.log("Servidor Corriendo Correctamente En Puerto: "+app.get('port'));
});