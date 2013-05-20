class AddFileAndRefCodeToTabulars < ActiveRecord::Migration
  def change
    add_column :tabulars, :file, :string
    add_column :tabulars, :ref_code, :string
  end
end
