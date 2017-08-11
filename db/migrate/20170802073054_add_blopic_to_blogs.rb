class AddBlopicToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :blopic, :text
  end
end
