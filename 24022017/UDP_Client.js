var dgram = require('dgram');
var message = new Buffer(":-)");
var client = dgram.createSocket("udp4");

client.send(message, 0, message.length, 5555, "172.30.81.248",
	function(err, bytes) {
		client.close();
	}
);