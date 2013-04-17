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

# roles
Role::ROLES.each do |role|
  Role.create(name: role)
end

# users
User.create!(first_name: "Admin", password: "12345", password_confirmation: "12345",
  email: "admin@sipd.com", role_id: Role.find_by_name(Role::ADMIN).id)

User.create!(
  first_name: "Citra", last_name: "Darma", address: "Jalan Nusantara",
  telephone: "08563565320", fax: "12345", email: "user@sipd.com",
  website: "citradarma.com", password: "12345", password_confirmation: "12345",
  role_id: Role.find_by_name(Role::USER).id
)