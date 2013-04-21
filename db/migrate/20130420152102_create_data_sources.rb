class CreateDataSources < ActiveRecord::Migration
  def change
    create_table :data_sources do |t|
      t.string :name
      t.string :telephone
      t.string :address
      t.boolean :default, default: false
      t.integer :user_id
      t.timestamps
    end
    add_index :data_sources, :user_id
  end
end
