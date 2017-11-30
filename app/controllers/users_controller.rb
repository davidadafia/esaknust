class UsersController < ApplicationController
	before_action :authenticate_user!
	def show
	
 	end	

 def create
    User.create(params[:user])
  end
  
  def update
  user = current_account.users.find(params[:id])
  user.update!(user_params)
  redirect_to user
  end

private
  def user_params
    params.require(:user).permit(:id)
  end 	

end
