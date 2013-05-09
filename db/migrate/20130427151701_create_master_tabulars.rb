class CreateMasterTabulars < ActiveRecord::Migration
  def change
    create_table :master_tabulars do |t|
      t.string :name
      t.string :roman_number
      t.string :ancestry
      t.string :unit_id
      t.string :ref_code
      t.integer :data_source_id
      t.timestamps
    end
    add_index :master_tabulars, :ancestry
    add_index :master_tabulars, :unit_id
    add_index :master_tabulars, :data_source_id
  end
end