class Admin::TabularsController < ApplicationController
  before_filter :require_login
  before_filter :find_tabular, only: [:edit, :update, :destroy, :add_child]
  before_filter :prepare_data, only: [:new, :create, :edit, :update]
  layout "admin"

  def index
    @user_options = GlobalClass.options_select(User)
    @tabulars = Tabular.search(params[:tabular]).paginate(per_page: DEFAULT_PER_PAGE, page: params[:page])
  end

  def new
    @tabular = Tabular.new
    render layout: false # to display fancybox
  end

  def create
    @tabular = Tabular.new(params[:tabular])
    respond_to do |format|
      if @tabular.save
        record_history("#{current_user.name} membuat data tabular dengan nama #{@tabular.name}")
        flash[:notice] = Flash.successfully_created
        format.html { redirect_to admin_tabulars_path }
        format.js { render :js => "window.location.href = ('#{admin_tabulars_path}');" }
      else
        flash[:error] = Flash.failed_created
        format.html { render :new }
        format.js
      end
    end
  end

  def edit
    render layout: false
  end

  def update
    respond_to do |format|
      if @tabular.update_attributes(params[:tabular])
        record_history("#{current_user.name} merubah data tabular dengan nama #{@tabular.name}")
        flash[:notice] = Flash.succcessfully_updated
        format.html { redirect_to admin_tabulars_path }
        format.js
      else
        flash[:error] = Flash.failed_updated
        format.html { render :edit }
        format.js
      end
    end
  end

  def destroy
    if @tabular.destroy
      record_history("#{current_user.name} menghapus data tabular dengan nama #{@tabular.name}")
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

  def prepare_data
    @unit_options = GlobalClass.options_select(Unit)
    @options_data_sources = GlobalClass.options_select(DataSource) # change to data_source_options
    @tabular_options = GlobalClass.options_select(Tabular)
  end
end