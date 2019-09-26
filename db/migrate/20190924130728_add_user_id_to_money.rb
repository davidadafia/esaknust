class AddUserIdToMoney < ActiveRecord::Migration[5.0]
  def change
    add_column :money, :user_id, :integer
  end
end
