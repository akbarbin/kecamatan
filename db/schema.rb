# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130427163900) do

  create_table "data_sources", :force => true do |t|
    t.string   "name"
    t.string   "telephone"
    t.string   "address"
    t.boolean  "default",    :default => false
    t.integer  "user_id"
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  add_index "data_sources", ["user_id"], :name => "index_data_sources_on_user_id"

  create_table "grades", :force => true do |t|
    t.float    "value"
    t.integer  "user_id"
    t.integer  "tabular_id"
    t.integer  "data_source_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "grades", ["data_source_id"], :name => "index_grades_on_data_source_id"
  add_index "grades", ["tabular_id"], :name => "index_grades_on_tabular_id"
  add_index "grades", ["user_id"], :name => "index_grades_on_user_id"

  create_table "histories", :force => true do |t|
    t.string   "browser"
    t.string   "ip_address"
    t.string   "controller"
    t.string   "action"
    t.text     "params"
    t.string   "note"
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "histories", ["user_id"], :name => "index_histories_on_user_id"

  create_table "master_tabulars", :force => true do |t|
    t.string   "name"
    t.integer  "parent_id"
    t.string   "ancestry"
    t.string   "ref_code"
    t.integer  "level"
    t.integer  "unit_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "master_tabulars", ["level"], :name => "index_master_tabulars_on_level"
  add_index "master_tabulars", ["unit_id", "ref_code", "parent_id"], :name => "index_master_tabulars_on_unit_id_and_ref_code_and_parent_id"

  create_table "nodes", :force => true do |t|
    t.integer  "parent_id"
    t.string   "name"
    t.string   "kind"
    t.integer  "size"
    t.datetime "modified_at"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "tabulars", :force => true do |t|
    t.string   "name"
    t.integer  "parent_id"
    t.integer  "lft"
    t.integer  "rgt"
    t.integer  "depth"
    t.integer  "unit_id"
    t.string   "year"
    t.string   "kind"
    t.integer  "user_id"
    t.integer  "data_source_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "tabulars", ["unit_id", "year"], :name => "index_tabulars_on_unit_id_and_year"
  add_index "tabulars", ["user_id", "parent_id", "lft", "rgt"], :name => "index_tabulars_on_user_id_and_parent_id_and_lft_and_rgt"

  create_table "units", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "telephone"
    t.string   "fax"
    t.string   "email"
    t.string   "website"
    t.string   "password_hash"
    t.string   "password_salt"
    t.string   "image_user"
    t.integer  "role_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "users", ["role_id"], :name => "index_users_on_role_id"

end
