class TabularsController < ApplicationController
  before_filter :require_user_login
  before_filter :find_tabular, only: [:edit, :update, :destroy, :add_child, :show]
  before_filter :prepare_data, only: [:new, :create, :edit, :update]
  layout "user"

  def index
    @tabulars = Tabular.roots.where(['user_id = ? AND year = ?', current_user.id, Date.today.year])
  end

  def destroy
    if @tabular.destroy
      record_history("#{current_user.name} menghapus data tabular dengan nama #{@tabular.name}")
      flash[:notice] = Flash.successfully_deleted
      redirect_to tabulars_path
    end
  end

  def show
    @user_tabulars = @tabular.descendants
  end

  # Created by [muhamadakbarbw@gmail.com] at May 9 2013,
  # update all tabular
  def update_all
    params[:tabular].each do |key, val|
      tabular = Tabular.find_by_id(key)
      tabular.update_attribute(:total, val)
    end
    flash[:notice] = Flash.succcessfully_updated
    redirect_to tabulars_path
  end

  private
  def find_tabular
    @tabular = Tabular.find_by_id(params[:id])
    if @tabular.nil?
      flash[:error] = Flash.data_not_found
      redirect_to tabulars_path
    end
  end

  def prepare_data
    @options_data_sources = GlobalClass.options_select(DataSource) # change to data_source_options
    @tabular_options = GlobalClass.options_select(Tabular)
  end
end
