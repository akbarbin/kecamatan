class PagesController < ApplicationController
  before_filter :redirect_to_dashboards

  def index
  end
end
