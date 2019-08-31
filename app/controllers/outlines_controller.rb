class OutlinesController < ApplicationController
	before_action :authenticate_user!
  def show
  	@outline = Outline.find(params[:id])
  	@outlines = Outline.all
    @sems = Sem.all
  end

  def create
  	Outline.create(params[:outline])
  end

  def update
  	outline = current_account.outlines.find(params[:id])
  	outline.update!(outline_params)
  	redirect_to outline
  end

private
  def outline_params
    params.require(:outline).permit(:title, :body, :id)
    params.require(:outlines).permit(:sem_id)
  end   
end