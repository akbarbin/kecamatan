class CreateTabulars < ActiveRecord::Migration
  def change
    create_table :tabulars do |t|
      t.string :name
      t.integer :parent_id
      t.integer :lft
      t.integer :rgt
      t.integer :depth # this is optional.
      t.integer :unit_id
      t.string :year
      t.string :kind
      t.integer :user_id
      t.integer :data_source_id
      t.timestamps
    end
    add_index :tabulars, [:unit_id, :year]
    add_index :tabulars, [:user_id, :parent_id, :lft, :rgt]
  end
end