class AddYearIdToClassrooms < ActiveRecord::Migration
  def change
    add_column :classrooms, :year_id, :integer
  end
end
