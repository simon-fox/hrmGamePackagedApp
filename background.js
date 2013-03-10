chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
	'width': 400,
	'height': 500
	});
});



//procedure to get bpm data from arduino sketch
//IN THE ARDUINO SKETCH
//	- use Serial.print(BPM); to print a string to the serial port http://arduino.cc/en/Serial/Print 
//IN THE JS
//	- use serial monitor (https://github.com/mrjones/Chrome-Arduino/blob/master/extension/serialmonitor.js)
//	- or comparable service to monitor serial port data
//	- take in string, cut it up, use it. 
//	- depending on when we put the Serial.print into the sketch we may get v frequent data
//	- probably keep a memory of 10 or so values in an array. 
//	- pick the most recent one, or average them 