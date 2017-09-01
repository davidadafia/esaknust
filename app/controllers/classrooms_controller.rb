class ClassroomsController < ApplicationController
	 before_action :authenticate_user!
  def index
    
  end

  def show
  	@classroom = Classroom.find(params[:id])
    @classrooms = Classroom.all
    @outline = Outline.find(params[:id])
    @outlines = Outline.all
    @resource = Resource.find(params[:id])
    @resources =Resource.all
    commontator_thread_show(@classroom)
  end

  def mates
  	@users = User.all
  end

   def create
    Classroom.create(params[:classroom])
  end
  
  def update
    classroom = current_account.classrooms.find(params[:id])
	  classroom.update!(classroom_params)
	  redirect_to classroom
  end

private
  def classroom_params
    params.require(:classroom).permit(:title, :body, :id)
    params.require(:year).permit(:year_id)
  end    
end
