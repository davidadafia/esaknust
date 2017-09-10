class AddQuestionIdToClassrooms < ActiveRecord::Migration
  def change
    add_column :classrooms, :question_id, :integer
  end
end
