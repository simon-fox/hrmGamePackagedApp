$(document).ready(function(){
	
	var connectionId;
	var serialDataRead;
	//set open options for port
	function onOpen(openInfo) {
	  connectionId = openInfo.connectionId;
	};
	
	//get list of serial ports
	chrome.serial.getPorts(function(ports) {
			  for (var i=0; i<ports.length; i++) {
				console.log(ports[i]);
			  }
	});
	/*
	chrome.serial.open("COM4", onOpen, function(){
		console.log('connection Open');
	});
	
	chrome.serial.read(connectionId, 1, function(ReadInfo){
		serialDataRead = ReadInfo;
		console.log(serialDataRead);
	});
	*/
	
});