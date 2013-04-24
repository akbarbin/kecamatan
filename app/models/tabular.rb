class Tabular < ActiveRecord::Base
  #--
  # constants
  #++

  #--
  # requires
  #++

  #--
  # includes
  include ActsAsTree
  #++

  #--
  # attribute
  attr_accessible :name, :parent_id, :user_id, :unit_id, :total, :data_source_id,
    :kind
  #++

  #--
  # extra capabilities
  acts_as_tree order: :name
  #++

  #--
  # belongs_to
  belongs_to :user
  belongs_to :unit
  belongs_to :data_source
  #++

  #--
  # has_one
  #++

  #--
  # has_many
  #++

  #--
  # accepts_nested_attributes_for
  #++

  #--
  # validations
  validates :name, presence: {message: Flash.required_presence}
  validates :unit_id, presence: {message: Flash.required_presence}
  #++

  #--
  # callback
  #++

  #--
  # scopes
  #++

  #--
  # other definition such as alias_method
  delegate :name, to: :user, prefix: true
  delegate :name, to: :unit, prefix: true
  delegate :name, to: :data_source, prefix: true
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
