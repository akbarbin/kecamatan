class Admin::HistoriesController < ApplicationController
  before_filter :require_login
  layout "data_table"

  def index
    @histories = History.search(params[:history])
    .paginate(per_page: DEFAULT_PER_PAGE, page: params[:page])
    @user_options = User.options_select
  end
end
