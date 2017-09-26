class PartsController < ApplicationController
  before_action :authenticate_user!
  def index
  end
  def show
  	@part = Part.find(params[:id])
  	@parts = Part.all
  	@question = Question.find(params[:id])
    @questions = Question.all
  end

  def create
  	Part.create(params[:part])
  end

  def update
  	part = current_account.parts.find(params[:id])
  	part.update!(part_params)
  	redirect_to part
  end

private
  def question_params
    params.require(:part).permit(:id, :title, :body)
    params.require(:question).permit(:question_id)
  end   
end