class ChatController < WebsocketRails::BaseController

  def index
  end
	
	def initialize_session
    # perform application setup here
    controller_store[:message_count] = 0
  end

  def new
  	new_message = { message: "Connected" }
		send_message :connected, new_message
	end
end
