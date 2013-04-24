class Unit < ActiveRecord::Base
  NAMES = ["Km2", "Ha", "C", "%", "mm/th", "Knot", "Buah", "Jiwa", "KK", "M2", "Km"]
  #--
  # constants
  #++

  #--
  # requires
  #++

  #--
  # includes
  #++

  #--
  # attribute
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
  validates :name, presence: {message: Flash.required_presence}
  #++

  #--
  # callback
  #++

  #--
  # scopes
  #++

  #--
  # other definition such as alias_method
  #++

  #--
  # public class methods
  def self.search(params)
    return scoped unless params
    conditions = []
    params.each do |key, value|
      if value.present?
        case key
        when "search"
          conditions << "name LIKE '%#{value}%'"
        else
          conditions << key +"="+ value
        end
      end
    end
    where(conditions.join(" AND "))
  end
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