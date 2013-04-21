module CustomDate

  def to_dmy
    self.strftime("%d-%m-%Y") rescue '-'
  end

  def to_dby
    self.strftime("%d-%B-%Y") rescue '-'
  end
end

# muhamad.akbar@kiranatama.com
# Apr 17, 2013
# Getting gender user
module CustomGender
  def to_gender
    self ? "Male" : "Female"
  end
end

module CustomDateTime

  def to_dmyhm
    self.strftime("%d-%m-%Y %H:%M") rescue '-'
  end

  def to_dmy
    self.strftime("%d-%m-%Y") rescue '-'
  end

end

Date.class_eval do
  include CustomDate
end

DateTime.class_eval do
  include CustomDateTime
end

Time.class_eval do
  include CustomDateTime
end

NilClass.class_eval do
  include CustomDate
  include CustomDateTime
  include CustomGender
end

TrueClass.class_eval do
  include CustomDate
  include CustomDateTime
  include CustomGender
end

FalseClass.class_eval do
  include CustomDate
  include CustomDateTime
  include CustomGender
end