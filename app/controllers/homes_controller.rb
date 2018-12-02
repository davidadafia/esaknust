class HomesController < ApplicationController
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

  private
  def homes_params
  	params.require(:year).permit(:title)
  	params.require(:classroom).permit(:title, :classroom_id)
  end
end
