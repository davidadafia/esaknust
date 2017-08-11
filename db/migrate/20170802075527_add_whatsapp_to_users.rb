class AddWhatsappToUsers < ActiveRecord::Migration
  def change
    add_column :users, :whatsapp, :integer
  end
end
