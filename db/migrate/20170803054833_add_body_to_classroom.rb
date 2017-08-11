class AddBodyToClassroom < ActiveRecord::Migration
  def change
    add_column :classrooms, :body, :text
  end
end
