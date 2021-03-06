class CreateTabulars < ActiveRecord::Migration
  def change
    create_table :tabulars do |t|
      t.string :name
      t.float :total
      t.string :year
      t.string :ancestry
      t.integer :ancestry_depth, :default => 0
      t.string :unit_id
      t.integer :data_source_id
      t.integer :user_id
      t.timestamps
    end
    add_index :tabulars, :unit_id
    add_index :tabulars, :data_source_id
    add_index :tabulars, :user_id
  end
end