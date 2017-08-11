class AddTitleToYear < ActiveRecord::Migration
  def change
    add_column :years, :title, :string
  end
end
