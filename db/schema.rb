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

ActiveRecord::Schema.define(:version => 20130421174416) do

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

  create_table "histories", :force => true do |t|
    t.string   "browser"
    t.string   "ip_address"
    t.string   "controller"
    t.string   "action"
    t.string   "params"
    t.string   "note"
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "histories", ["user_id"], :name => "index_histories_on_user_id"

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "tabulars", :force => true do |t|
    t.string   "name"
    t.string   "roman_number"
    t.string   "unit_id"
    t.float    "total"
    t.integer  "parent_id"
    t.integer  "data_source_id"
    t.integer  "user_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "tabulars", ["data_source_id"], :name => "index_tabulars_on_data_source_id"
  add_index "tabulars", ["parent_id"], :name => "index_tabulars_on_parent_id"
  add_index "tabulars", ["unit_id"], :name => "index_tabulars_on_unit_id"
  add_index "tabulars", ["user_id"], :name => "index_tabulars_on_user_id"

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
