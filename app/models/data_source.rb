class DataSource < ActiveRecord::Base
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
  attr_accessible :name, :telephone, :address, :user_id, :default
  #++

  #--
  # extra capabilities
  #++

  #--
  # belongs_to
  belongs_to :user
  #++

  #--
  # has_one
  #++

  #--
  # has_many
  has_many :tabulars
  #++

  #--
  # accepts_nested_attributes_for
  #++

  #--
  # validations
  validates :name, presence: {message: Flash.required_presence}
  validates :telephone, presence: {message: Flash.required_presence}
  validates :address, presence: {message: Flash.required_presence}
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

  def self.get_data
    all.map{|c| [c.name, c.telephone, c.address, c.user_name]}
  end

  # Created by [muhamadakbarbw@gmail.com] at May 11 2013,
  # set default data source by user
  def self.set_default(data_source)
    data_source_default = DataSource.find_by_default_and_user_id(true, data_source.user_id)
    if data_source_default.present?
      if data_source.id != data_source_default.id
        data_source.update_attribute(:default, true)
        data_source_default.update_attribute(:default, false)
      end
    else
      data_source.update_attribute(:default, true)
    end
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
