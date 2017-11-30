class AddLevelToUsers < ActiveRecord::Migration
  def change
    add_column :users, :level, :boolean
  end
end
