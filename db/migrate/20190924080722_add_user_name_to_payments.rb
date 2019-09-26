class AddUserNameToPayments < ActiveRecord::Migration[5.0]
  def change
    add_column :payments, :user_name, :string
  end
end
