class Admin::TabularsController < ApplicationController
  before_filter :require_admin_login
  before_filter :find_tabular, only: [:edit, :update, :destroy, :add_child, :show,
    :import, :export]
  before_filter :prepare_data, only: [:new, :create, :edit, :update]
  layout "admin"

  def index
    @user_options = GlobalClass.options_select(User)
    @tabulars = Tabular.search(params[:tabular]).includes(:user).group(:year, :user_id)
    .paginate(per_page: DEFAULT_PER_PAGE, page: params[:page])
  end

  def show
    @user_tabulars = @tabular.descendants
    filename = "data_tabular_#{@tabular.name}_kecamatan #{@tabular.user_name}_#{@tabular.year}.xls"
    respond_to do |format|
      format.html
      format.xls { headers["Content-Disposition"] = "attachment; filename=\"#{filename}\"" }
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at May 9 2013,
  # general display
  def general_display
    @tabulars = Tabular.where(['ancestry_depth IN (?) AND user_id = ? AND year = ?', [0,1], params[:user_id], params[:year]])
  end

  # Created by [muhamadakbarbw@gmail.com] at May 9 2013,
  # update all tabular
  def update_all
    params[:tabular].each do |key, val|
      if val[:val] != val[:old_val]
        tabular = Tabular.find_by_id(key)
        tabular.update_attribute(:total, val[:val])
      end
    end
    flash[:notice] = Flash.succcessfully_updated
    redirect_to admin_tabulars_path
  end

  # Created by [muhamadakbarbw@gmail.com] at May 11 2013,
  # copy from last year.
  def copy_from_year
    Tabular.copy_from_year(params[:tabular][:year], current_user)
    flash[:notice] = Flash.succcessfully_updated
    redirect_to admin_tabulars_path
  end

  # Created by [muhamadakbarbw@gmail.com] at May 20 2013,
  # export excel
  def export
    file = Export.export({object: @tabular, year: @tabular.year, user: @tabular.user})
    send_file file[:filepath]
  end

  # Created by: [muhamadakbarbw@gmail.com] at May 19 2013,
  # title: Import excel from user by data tabular
  # input: excel, year, user, total
  # process: get and update the tabular by input
  # output : total will be update with same format excel and database
  def import
    result = Export.upload_excel(params[:tabular], false)
    if result[:status]
      Export.import_value({object: @tabular, path: result[:path], user: @tabular.user})
      flash[:notice] = Flash.successfully_imported
      redirect_to admin_tabular_path(@tabular)
    else
      flash.now[:error] = Flash.failed_imported
      redirect_to admin_tabular_path(@tabular)
    end
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