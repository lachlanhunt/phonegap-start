var channel = new MessageChannel();
channel.port1.addEventListener("message", function(message) {
	alert("Message received: " + message.data);
})
return channel.port2;