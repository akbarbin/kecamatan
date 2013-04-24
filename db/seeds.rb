# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# To truncate all tables except schema_migrations
ActiveRecord::Base.connection.tables.each do |table|
  ActiveRecord::Base.connection.execute("DELETE FROM #{table}") if table != "schema_migrations"
end

# units
Unit::NAMES.each do |unit|
  Unit.create!(name: unit)
end

# data sources
DataSource.create!({name: "Badan Perencanaan Pembangunan Kab. Jember", address: "Jl. Sudarman No. 1 Jember", telephone: "03317898"})
DataSource.create!({name: "Badan Pusat Statistik Kab. Jember", address: "Jl. Cendrawasih No. 20 Jember", telephone: "03317827", default: true})
# roles
Role::ROLES.each do |role|
  Role.create!(name: role)
end

# users
User.create!(name: "Admin", password: "12345", password_confirmation: "12345",
  email: "admin@sipd.com", role_id: Role.find_by_name(Role::ADMIN).id)

User.create!(
  name: "Kaliwates", address: "Jalan Nusantara",
  telephone: "08563565320", fax: "12345", email: "user@sipd.com",
  website: "citradarma.com", password: "12345", password_confirmation: "12345",
  role_id: Role.find_by_name(Role::USER).id
)

User.create!(
  name: "Tanggul", address: "Jalan Klatakan",
  telephone: "08563565320", fax: "12345", email: "tanggul@sipd.com",
  website: "citradarma.com", password: "12345", password_confirmation: "12345",
  role_id: Role.find_by_name(Role::USER).id
)

require 'pp'

# seeds.xml was generated with 'tree' command (tree -XDh)
tree = Hash.from_xml(File.read(Rails.root.join("db/seeds.xml")))["tree"]
report = tree["report"]

def create_nodes(parent, tree)
  ["directory", "file"].each do |kind|
    if tree[kind]
      tree[kind] = [tree[kind]] unless tree[kind].is_a?(Array)
      tree[kind].each do |value|
        node = Node.create(
          kind: kind,
          modified_at: value["time"].present? ? Time.parse(value["time"]) : nil,
          name: value["name"],
          parent: parent,
          size: value["size"].present? ? value["size"].to_i : nil
        )

        create_nodes(node, value)
      end
    end
  end
end

create_nodes(nil, tree["directory"])

# Checksum
puts "=" * 80
report.each_pair do |kind, expected_count|
  kind = kind.singularize
  actual_count = Node.where(kind: kind).count
  puts "Created #{actual_count}/#{expected_count} #{kind} nodes"
end
puts "=" * 80
