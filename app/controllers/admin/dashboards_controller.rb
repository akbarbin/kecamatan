class Admin::DashboardsController < ApplicationController
  before_filter :require_login
  layout "admin"

  def index
  end
end