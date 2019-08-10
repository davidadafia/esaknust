class AddSemIdToOutlines < ActiveRecord::Migration[5.0]
  def change
    add_column :outlines, :sem_id, :integer
  end
end
