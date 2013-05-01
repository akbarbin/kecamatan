class CreateMasterTabulars < ActiveRecord::Migration
  def change
    create_table :master_tabulars do |t|
      t.string :name
      t.integer :parent_id
      t.string :ancestry
      t.string :ref_code
      t.integer :level
      t.integer :unit_id
      t.timestamps
    end
    add_index :master_tabulars, [:unit_id, :ref_code, :parent_id]
    add_index :master_tabulars, [:level]
  end
end