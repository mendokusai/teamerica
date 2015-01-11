var dispatcher;

var message = {
	name: "Put stuff in the tubes.",
	completed: false
}

$(document).ready(function(){
	// set up websocket
	dispatcher = new WebSocketRails("localhost:3000/websocket");

	// dispatcher.bind('message_test', function(data){
	// 	console.log(data.message);
	dispatcher.trigger('chat.new', function(){
		console.log("hi");
		$('#messages').append('<li>' + name + '</li>');
	});





	
});