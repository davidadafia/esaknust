class AddMinorToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :minor, :text
  end
end
