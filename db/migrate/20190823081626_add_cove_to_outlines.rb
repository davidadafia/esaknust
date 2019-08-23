class AddCoveToOutlines < ActiveRecord::Migration[5.0]
  def change
    add_column :outlines, :cove, :string
  end
end
