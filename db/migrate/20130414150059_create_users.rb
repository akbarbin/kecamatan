class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :telephone
      t.string :fax
      t.string :email
      t.string :website
      t.string :password_hash
      t.string :password_salt
      t.string :image_user
      t.integer :role_id
      t.timestamps
    end

    add_index :users, :role_id
  end
end