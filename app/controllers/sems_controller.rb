class SemsController < ApplicationController
	before_action :authenticate_user!
  def show
  	@outline = Outline.find(params[:id])
  	@outlines = Outline.all
  	@classroom = Classroom.find(params[:id])
    @classrooms = Classroom.all
    @sem = Sem.find(params[:id])
    @sems = Sem.all
  end

  def create
  	Sem.create(params[:sem])
  end

  def update
  	sem = current_account.sems.find(params[:id])
  	sem.update!(sem_params)
  	redirect_to sem
  end

private
  def sem_params
    params.require(:sem).permit(:title, :body, :id, :footer)
    params.require(:classroom).permit(:classroom_id)
  end   
end