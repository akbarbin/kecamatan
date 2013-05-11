class Admin::DashboardsController < ApplicationController
  before_filter :require_admin_login
  layout "admin"

  def index
  end
end