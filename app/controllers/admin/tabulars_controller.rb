class Admin::TabularsController < ApplicationController
  before_filter :require_login
  before_filter :find_tabular, only: [:edit, :update, :destroy]
  layout "data_table"

  def index
    @user_options = User.options_select
    @tabulars = Tabular.search(params[:tabular]).paginate(per_page: DEFAULT_PER_PAGE, page: params[:page])
  end

  def new
    @option_tabulars = Unit.options_select
    @options_data_sources = DataSource.options_select
    @tabular = Tabular.new
    render layout: false # to display fancybox
  end

  def create
    @tabular = Tabular.new(params[:tabular])
    respond_to do |format|
      if @tabular.save
        #      record_activity("#{current_user.name} membuat data tabular dengan nama #{@tabular.name}")
        flash[:notice] = Flash.successfully_created
        format.html { redirect_to admin_tabulars_path }
        format.js
      else
        @option_tabulars = Unit.options_select
        @options_data_sources = DataSource.options_select
        flash[:error] = Flash.failed_created
        format.html { render :new }
        format.js
      end
    end
  end

  def edit
    @option_tabulars = Unit.options_select
    @options_data_sources = DataSource.options_select
    render layout: false
  end

  def update
    respond_to do |format|
      if @tabular.update_attributes(params[:tabular])
        flash[:notice] = Flash.succcessfully_updated
        format.html { redirect_to admin_tabulars_path }
        format.js
      else
        @option_tabulars = Unit.options_select
        @options_data_sources = DataSource.options_select
        flash[:error] = Flash.failed_updated
        format.html { render :edit }
        format.js
      end
    end
  end

  def destroy
    if @tabular.destroy
      flash[:notice] = Flash.successfully_deleted
      redirect_to admin_tabulars_path
    end
  end

  def show
  end

  private
  def find_tabular
    @tabular = Tabular.find_by_id(params[:id])
    if @tabular.nil?
      flash[:error] = Flash.data_not_found
      redirect_to admin_tabulars_path
    end
  end
end
