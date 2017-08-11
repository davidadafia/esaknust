class AddWriterToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :writer, :string
  end
end
