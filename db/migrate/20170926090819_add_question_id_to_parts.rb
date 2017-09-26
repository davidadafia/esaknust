class AddQuestionIdToParts < ActiveRecord::Migration
  def change
    add_column :parts, :question_id, :integer
  end
end
