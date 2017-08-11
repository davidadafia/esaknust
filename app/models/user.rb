class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

   def user_params
      params.require(:user).permit(:user_name, :whatsapp, :email, :password, :password_confirmation)
   end   

end

