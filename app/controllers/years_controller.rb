class YearsController < ApplicationController
  def index
  	@classrooms = Classroom.all
  	@years = Year.all
  end 

  def show
  	@years = Year.all
  	@year = Year.find(params[:id])
  	@classrooms = Classroom.all
  	@Classroom = Classroom.find(params[:id])
  end

  def create
  	year.create(params[:year])
  end

  def update
  	year = current_account.year.find(params[:id])
  	year.update!(year_params)
  	redirect_to year
  end

private
  def year_params
  	params.require(:year).permit(:title)
  	params.require(:classroom).permit(:title, :classroom_id)
  end
end
