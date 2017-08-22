class ResourcesController < ApplicationController
	before_action :authenticate_user!
  def show
  	@resource = Resource.find(params[:id])
  	@resources = Resource.all
  end

  def create
  	Resource.create(params[:resource])
  end

  def update
  	resource = current_account.resources.find(params[:id])
  	resource.update!(resource_params)
  	redirect_to resource
  end
  
private
  def resource_params
    params.require(:resource).permit(:title, :body, :id)
    params.require(:classroom).permit(:classroom_id)
  end   
end