class DashboardsController < ApplicationController
  before_filter :require_login
  layout "user"

  def index
  end
end
