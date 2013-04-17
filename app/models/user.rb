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
  attr_accessible :email, :password , :password_confirmation, :first_name,
    :last_name, :telephone, :fax, :website, :old_password, :address, :role_id,
    :image_user_cache, :image_user
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
  #++

  #--
  # accepts_nested_attributes_for
  #++

  #--
  # validations
  validates :password, presence: {on: :create}, confirmation: true
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
        where(['role = ?', role])
      end
    end
  end

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

  Role::ROLES.each do |role|
    define_method "#{role}?" do
      self.role.name == role
    end
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