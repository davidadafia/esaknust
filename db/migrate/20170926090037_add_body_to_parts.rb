class AddBodyToParts < ActiveRecord::Migration
  def change
    add_column :parts, :body, :text
  end
end
