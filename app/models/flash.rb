class Flash
  # required
  def self.required_presence
    "harus diisi."
  end

  def self.required_numericallity
    "harus angka."
  end

  def self.required_uniqueness
    "harus unik."
  end

  # successfully
  def self.successfully_created
    "berhasil dibuat."
  end

  def self.succcessfully_updated
    "berhasil diubah."
  end

  def self.successfully_deleted
    "berhasil dihapus."
  end

  def self.successfully_signed_in
    "berhasil sign in."
  end

  def self.successfully_signed_out
    "berhasil sign out."
  end

  # failed
  def self.failed_created
    "gagal dibuat."
  end

  def self.failed_updated
    "gagal diubah."
  end

  def self.failed_deleted
    "gagal dihapus."
  end

  # invalid
  def self.invalid_email_and_password
    "Invalid email or password."
  end

  def self.not_permited_to_access_page
    "You are not permitted, please login first"
  end
end
