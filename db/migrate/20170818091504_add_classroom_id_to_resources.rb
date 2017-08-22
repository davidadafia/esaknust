class AddClassroomIdToResources < ActiveRecord::Migration
  def change
    add_column :resources, :classroom_id, :integer
  end
end
