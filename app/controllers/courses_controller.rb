class CoursesController < ApplicationController
	before_action :authenticate_user!
  def index
  	@courses = Course.all
  end

  def show
  	@course = Course.find(params[:id])
  	@classroom = Classroom.find(params[:id])
    @classrooms = Classroom.all
  end

  def create
  	Course.create(params[:course])
  end

  def update
  	course = current_account.course.find(params[:id])
	course.update!(course_params)
	redirect_to course 
  end

private
	def course_params
		params.require(:course).permit(:title)
		params.require(:year).permit(:year_id)
	end
end
