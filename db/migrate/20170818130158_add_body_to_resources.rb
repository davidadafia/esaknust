class AddBodyToResources < ActiveRecord::Migration
  def change
    add_column :resources, :body, :text
  end
end
