class ChatController < WebsocketRails::BaseController
  before_action only: :new_connection do 
    puts 'new connection made'
  end

  def index
    @chats = Chat.all
  end
	
	def initialize_session
    # perform application setup here
    connection = "session Initialized"
  end

  def new_connection
    send_message :connected, message
  end


end
