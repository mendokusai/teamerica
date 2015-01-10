class ChatContollerController < WebsocketRails::BaseController
	
	def initialize_session
    # perform application setup here
    controller_store[:message_count] = 0
  end

 #  def connected
 #  	new_message = { message: "Connected" }
	# 	send_message :connected, new_message
	# end
end
