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

  # invalid
  def self.invalid_email_and_password
    "Invalid email or password."
  end
end
