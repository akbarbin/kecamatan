class CreateGrades < ActiveRecord::Migration
  def change
    create_table :grades do |t|
      t.float :value
      t.integer :user_id
      t.integer :tabular_id
      t.integer :data_source_id
      t.timestamps
    end
    add_index :grades, :user_id
    add_index :grades, :tabular_id
    add_index :grades, :data_source_id
  end
end
