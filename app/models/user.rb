class User < ActiveRecord::Base
  attr_protected :email, :password, :password_confirmation
  attr_accessor :password, :old_password
  before_save :encrypt_password
  attr_accessible :email, :password , :password_confirmation, :first_name,
    :last_name, :telephone, :fax, :website, :old_password
  validates :password, presence: {on: :create}, confirmation: true
  validates :email, presence: { message: Flash.required_presence},
    uniqueness: { message: Flash.required_uniqueness}

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
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

  private
  def validate_password_old
    errors[:old_password] << Flash.required_presence
  end
end
