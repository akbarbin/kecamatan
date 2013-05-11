class DashboardsController < ApplicationController
  before_filter :require_user_login
  layout "user"

  def index
  end
end
