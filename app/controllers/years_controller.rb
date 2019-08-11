class YearsController < ApplicationController
  before_action :authenticate_user!
  def index
    @years = Year.all
  	@classrooms = Classroom.all.order(created_at: :asc)
  end 

  def show
  	@years = Year.all
  	@year = Year.find(params[:id])
  	@classrooms = Classroom.all.order(created_at: :asc)
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
