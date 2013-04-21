class History < ActiveRecord::Base
  belongs_to :user
  attr_accessible :id, :browser, :ip_address, :controller, :action, :params,
    :note, :user_id

  delegate :name, :address, to: :user, prefix: true

  def self.search(params)
    return scoped unless params
    conditions = []
    params.each do |key, value|
      return unless value
      case key
      when "search"
        conditions << "user_id = '#{value}'"
      end
    end
    where(conditions.join("AND"))
  end
end
