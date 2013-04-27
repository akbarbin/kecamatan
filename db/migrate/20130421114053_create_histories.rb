class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.string :browser
      t.string :ip_address
      t.string :controller
      t.string :action
      t.text :params
      t.string :note
      t.integer :user_id
      t.timestamps
    end
    add_index :histories, :user_id
  end
end