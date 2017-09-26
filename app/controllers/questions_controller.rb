class QuestionsController < ApplicationController
	before_action :authenticate_user!
  def index
  end
  def show
  	@question = Question.find(params[:id])
  	@questions = Question.all
    @parts = Part.all
  	@classroom = Classroom.find(params[:id])
    @classrooms = Classroom.all
    
  end

  def create
  	Question.create(params[:question])
  end

  def update
  	question = current_account.questions.find(params[:id])
  	question.update!(question_params)
  	redirect_to question
  end

private
  def question_params
    params.require(:question).permit(:title, :body, :id)
    params.require(:classroom).permit(:classroom_id)
    params.require(:part).permit(:part_id)
  end   
end