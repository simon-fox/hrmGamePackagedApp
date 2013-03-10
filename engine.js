$(document).ready(function(){
	var ports = [];
	//get list of serial ports
	chrome.serial.getPorts(function(ports) {
			  for (var i=0; i<ports.length; i++) {
				console.log(ports[i]);
			  }
	});
});