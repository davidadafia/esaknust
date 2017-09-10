class AddClassroomIdToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :classroom_id, :integer
  end
end
