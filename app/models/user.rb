class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable
  devise :database_authenticatable, :registerable,  
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :confirmable, :timeoutable
end
