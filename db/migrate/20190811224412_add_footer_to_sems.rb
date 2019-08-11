class AddFooterToSems < ActiveRecord::Migration[5.0]
  def change
    add_column :sems, :footer, :text
  end
end
