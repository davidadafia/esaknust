class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  acts_as_commontator

   def user_params
      params.require(:user).permit(:user_name, :paid, :whatsapp, :major, :level, :minor, :email, :password, :password_confirmation)
   end   

end

