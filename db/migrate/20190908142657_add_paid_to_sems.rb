class AddPaidToSems < ActiveRecord::Migration[5.0]
  def change
    add_column :sems, :paid, :integer
  end
end
