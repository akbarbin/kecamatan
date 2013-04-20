class CreateTabulars < ActiveRecord::Migration
  def change
    create_table :tabulars do |t|
      t.string :name
      t.string :roman_number
      t.integer :parent_id
      t.timestamps
    end
    add_index :tabulars, :parent_id
  end
end