class ClassroomsController < ApplicationController
    before_action :authenticate_user!
  def index
    @years = Year.all
    @classrooms = Classroom.all.order(created_at: :asc)
  end

  def show
  	@classroom = Classroom.find(params[:id])
    @classrooms = Classroom.all.order(created_at: :asc)
    @sem = Sem.find(params[:id])
    @sems = Sem.all.order(created_at: :asc)
    @outline = Outline.find(params[:id])
    @outlines = Outline.all
    @resource = Resource.find(params[:id])
    @resources =Resource.all
    @question = Question.find(params[:id])
    @questions =Question.all
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
