class AddMoneyToOutline < ActiveRecord::Migration[5.0]
  def change
    add_column :outlines, :money, :string, array: true, default: []
  end
end
