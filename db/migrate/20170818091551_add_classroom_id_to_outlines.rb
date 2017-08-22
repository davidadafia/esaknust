class AddClassroomIdToOutlines < ActiveRecord::Migration
  def change
    add_column :outlines, :classroom_id, :integer
  end
end
