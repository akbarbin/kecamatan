class MasterTabular < ActiveRecord::Base
  #--
  # constants
  KIND_OPTIONS = ['directory','child']
  #++

  #--
  # requires
  #++

  #--
  # includes
  #++

  #--
  # attribute
  attr_accessible :name, :unit_id, :parent_id, :kind, :parent
  #++

  #--
  # extra capabilities
  #  acts_as_tree order: :name
  #++

  #--
  # belongs_to
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
  #++

  #--
  # callback
  before_save :generate_ref_code!
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
  def generate_ref_code!
    if self.parent_id.blank?
      count_child_parent = MasterTabular.where(["parent_id IS NULL"]).count
      self.ref_code = "#{count_child_parent + 1}."
    else
      ref_code_parent = MasterTabular.find_by_id(self.parent_id).ref_code
      count_child_parent = MasterTabular.where('ref_code LIKE ?', "#{ref_code_parent}%").count - 1
      self.ref_code = "#{ref_code_parent}#{count_child_parent + 1}."
    end
  end
  #++

  #--
  # private instance methods
  #++

  protected
  #--
  # protected class methods
  # Created by [muhamadakbarbw@gmail.com] at March 29 2013,
  # to generate layout by year
  def self.generate_layout!(year)
    parent_id = nil
    User.all.each do |user|
      self.all.each do |master_tabular|
        parent_id = Tabular.find_by_name(master_tabular.parent.name).id if master_tabular.parent_id?
        Tabular.create(
          name: master_tabular.name, year: year, parent_id: parent_id, user_id: user.id
        )
      end
    end
  end
  #++

  #--
  # protected instance methods
  #++
end
