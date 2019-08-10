class CreateSems < ActiveRecord::Migration[5.0]
  def change
    create_table :sems do |t|
      t.string :title
      t.text :body
      t.integer :classroom_id

      t.timestamps
    end
  end
end
