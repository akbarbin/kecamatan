class MasterTabular < ActiveRecord::Base
  #--
  # constants
  KIND_OPTIONS = ['parent','child']
  #++

  #--
  # requires
  has_ancestry cache_depth: true
  #++

  #--
  # includes
  #++

  #--
  # attribute
  attr_accessible :name, :unit_id, :parent_id, :kind, :parent, :ancestry
  #++

  #--
  # extra capabilities
  delegate :name, to: :unit, prefix: true
  #++

  #--
  # belongs_to
  belongs_to :unit
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
  #  validates :name, presence: {message: Flash.required_presence},
  #    uniqueness: {scope: :ancestry, message: Flash.required_uniqueness}
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
    if self.ancestry.blank?
      count_child_parent = MasterTabular.where(["ancestry IS NULL"]).count
      self.ref_code = "#{count_child_parent + 1}."
    else
      ref_code_parent = self.parent.ref_code
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
    ancestry_id = nil
    self.all.each do |master_tabular|
      User.all.each_with_index do |user, idx|
        ancestry_id = Tabular.find_all_by_name_and_year(master_tabular.parent.name, year)[idx].id rescue nil
        Tabular.create(
          name: master_tabular.name, year: year, parent_id: ancestry_id, user_id: user.id
        )
      end
    end
  end
  #++

  #--
  # protected instance methods
  #++
end
