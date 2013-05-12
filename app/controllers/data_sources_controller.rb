class DataSourcesController < ApplicationController
  before_filter :require_user_login
  before_filter :find_data_source, only: [:edit, :update, :destroy, :set_default]
  layout "user"

  def index
    @data_sources = current_user.data_sources.search(params[:data_source])
    .paginate(per_page: DEFAULT_PER_PAGE, page: params[:page])
  end

  def new
    @data_source = DataSource.new
  end

  def create
    @data_source = current_user.data_sources.build(params[:data_source])
    respond_to do |format|
      if @data_source.save
        record_history("#{current_user.name} membuat data tabular dengan nama : #{@data_source.name}")
        flash[:notice] = Flash.successfully_created
        format.html { redirect_to data_sources_path }
        format.js
      else
        flash[:error] = Flash.failed_created
        format.html { render :new }
        format.js
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @data_source.update_attributes(params[:data_source])
        record_history("#{current_user.name} mengedit sumber data pada : #{@data_source.name}")
        flash[:notice] = Flash.succcessfully_updated
        format.html { redirect_to data_sources_path }
        format.js
      else
        flash[:error] = Flash.failed_updated
        format.html { render :edit }
        format.js
      end
    end
  end

  def destroy
    if @data_source.destroy
      record_history("#{current_user.name} menghapus sumber data : #{@data_source.name}")
      flash[:notice] = Flash.successfully_deleted
      redirect_to data_sources_path
    end
  end

  def show
  end

  def export
    file = Export.generate({data: DataSource.get_data, filename: "Sumber Data", columns: DataSource.column_names - ["updated_at", "created_at"]})
    send_file file[:filepath]
  end

  def set_default
    DataSource.set_default(@data_source)
    flash[:notice] = Flash.succcessfully_updated
    redirect_to data_sources_path
  end

  private
  def find_data_source
    @data_source = DataSource.find_by_id(params[:id])
    if @data_source.nil?
      flash[:error] = Flash.not_found
      redirect_to data_sources_path
    end
  end
end
