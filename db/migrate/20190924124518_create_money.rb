class CreateMoney < ActiveRecord::Migration[5.0]
  def change
    create_table :money do |t|
      t.string :value
      t.string :user_name
      t.integer :classroom_id

      t.timestamps
    end
  end
end
