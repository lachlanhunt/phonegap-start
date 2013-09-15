document.body.innerHTML = "Executing injected script";

return "response message";
/*var channel = new MessageChannel();
document.body.innerHTML += ", creating channel: " + channel;
*//*
channel.port1.addEventListener("message", function(message) {
	alert("Message received: " + message.data);
})
return channel.port2;*/