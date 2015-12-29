var express = require('express');

app = express();

// Serve static files from the 'static' directory
app.use(express.static('static'));

var serverPort = 8000;
var serverIPAddress = '127.0.0.1';

// Launch the app
app.listen(serverPort, serverIPAddress, function() {
	console.log('Server running');
});
