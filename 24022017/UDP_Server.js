// IP : 172.30.81.241, UDP : 5555
var dgram = require("dgram");
var server = dgram.createSocket("udp4");

// server.on("message", function (msg, rinfo) {
// 	console.log("server got: " + msg + " from " +
// 		rinfo.address + ":" + rinfo.port);
// });

server.on("message", function (msg) {
	console.log("" + msg);
});

server.bind(5555);

// server.bind(41234); // server listening 0.0.0.0:41234