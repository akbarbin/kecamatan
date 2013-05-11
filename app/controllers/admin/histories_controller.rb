class Admin::HistoriesController < ApplicationController
  before_filter :require_admin_login
  layout "admin"

  def index
    @histories = History.search(params[:history])
    .paginate(per_page: DEFAULT_PER_PAGE, page: params[:page])
    @user_options = GlobalClass.options_select(User)
  end
end
