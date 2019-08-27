class AddPaidToOutlines < ActiveRecord::Migration[5.0]
  def change
    add_column :outlines, :paid, :text
    
  end
end
