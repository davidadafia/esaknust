class AddYearIdToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :year_id, :integer
  end
end
