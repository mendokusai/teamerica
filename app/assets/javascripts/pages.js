var dispatcher;

var message = {
	name: "Put stuff in the tubes.",
	completed: false
}

$(document).ready(function(){
	// set up websocket
	dispatcher = new WebSocketRails("localhost:3000/websocket");
	console.log(dispatcher); //connecting
	
	$('#send_button').on('click', function(){
		var text = $('#send_text').val();
		if (text.length > 0){
			//add a dispatch task here...
			$('#messages').append("<li>" + text + "</li>");
		};
		$('#send_text').val("");
	});

	// dispatcher.bind('initialize_session', function(data){
	// 	$('#messages').append(data);});

	// var disp_connect = dispatcher.bind('message_test', function(data){
	// 	console.log(data._conn);
	// });
	// dispatcher.bind('new_connection', function(data){
	// 	$('#messages').append("<li>" + data + "</li>");
	// });

	// $('#send_button').on('click', function(){
	// 	dispatcher.bind('chat.new', function(){
	// 		console.log("hi");
	// 		$('#messages').append('<li>message goes here</li>');
	// 	});
	// });
	
});