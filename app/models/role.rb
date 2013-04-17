class Role < ActiveRecord::Base
  #--
  # constants
  ROLES = ['admin', 'user']
  ADMIN = ['admin']
  USER = ['user']
  #++

  #--
  # requires
  #++

  #--
  # includes
  #++

  #--
  # attr
  attr_accessible :name
  #++

  #--
  # extra capabilities
  #++

  #--
  # belongs_to
  #++

  #--
  # has_one
  #++

  #--
  # has_many
  has_many :users
  #++

  #--
  # accepts_nested_attributes_for
  #++

  #--
  # validations
  #++

  #--
  # callbacks
  #++

  #--
  # scopes
  #++

  #--
  # other definition such as alias_method
  #++

  #--
  # public class methods
  #++

  #--
  # public instance methods
  #++

  private
  #--
  # private class methods
  #++

  #--
  # private instance methods
  #++

  protected
  #--
  # protected class methods
  #++

  #--
  # protected instance methods
  #++
end