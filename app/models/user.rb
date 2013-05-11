class User < ActiveRecord::Base
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
  attr_protected :password, :password_confirmation, :email
  attr_accessible :email, :password, :password_confirmation, :name, :telephone,
    :fax, :website, :old_password, :address, :role_id, :image_user_cache,
    :image_user, :remove_image_user
  attr_accessor :password, :old_password, :image_user_cache
  #++

  #--
  # extra capabilities
  mount_uploader :image_user, ImageUserUploader
  #++

  #--
  # belongs_to
  belongs_to :role
  #++

  #--
  # has_one
  #++

  #--
  # has_many
  has_many :histories
  has_many :data_sources
  #++

  #--
  # accepts_nested_attributes_for
  #++

  #--
  # validations
  validates :name, presence: {message: Flash.required_presence},
    uniqueness: {message: Flash.required_uniqueness}
  validates :role_id, presence: {message: Flash.required_presence}
  validates :password, presence: {on: :create, message: Flash.required_presence},
    confirmation: true
  validates :email, presence: {message: Flash.required_presence},
    uniqueness: {message: Flash.required_uniqueness}
  #++

  #--
  # callback
  before_save :encrypt_password
  #++

  #--
  # scopes
  #++

  #--
  # other definition such as alias_method
  delegate :name, to: :role, prefix: true
  #++

  #--
  # public class methods
  class << self
    Role::ROLES.each do |role|
      define_method "all_#{role}" do
        where(['role_id = ? AND remove = ?', Role.find_by_name(role).id, false])
      end
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at May 10 2013,
  # search user.
  def self.search(params)
    return self.all_user unless params
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
    self.all_user.where(conditions.join(" AND "))
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # to check authentication user
  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
  #++

  #--
  # public instance methods
  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # to get return true role
  # for example: admin?
  Role::ROLES.each do |role|
    define_method "#{role}?" do
      self.role.name == role
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at May 11 2013,
  # Move to trash when user was deleted
  # for example: admin?
  def move_to_trash
    self.update_attribute(:remove, true)
  end
  #++

  private
  #--
  # private class methods
  #++

  #--
  # private instance methods
  def validate_password_old
    errors[:old_password] << Flash.required_presence
  end
  #++

  protected
  #--
  # protected class methods
  #++

  #--
  # protected instance methods
  #++
end