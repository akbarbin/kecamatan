class Admin::MasterTabularsController < ApplicationController
  before_filter :require_admin_login
  before_filter :prepare_data, only: [:index, :new, :create, :edit, :update]
  before_filter :find_tabular, only: [:edit, :update, :destroy, :add_child, :show]
  layout "admin"

  def index
    @master_tabulars = MasterTabular.where(["ancestry_depth IN (?)", [0,1]])
  end

  def new
    @master_tabular = MasterTabular.new(:parent_id => params[:parent_id])
  end

  def create
    @master_tabular = MasterTabular.new(params[:master_tabular])
    respond_to do |format|
      if @master_tabular.save
        record_history("#{current_user.name} membuat data master tabular dengan nama #{@master_tabular.name}")
        flash[:notice] = Flash.successfully_created
        format.html { redirect_to admin_master_tabulars_path }
        format.js { render :js => "window.location.href = ('#{admin_master_tabulars_path}');" }
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
      if @master_tabular.update_attributes(params[:master_tabular])
        record_history("#{current_user.name} merubah data tabular dengan nama #{@master_tabular.name}")
        flash[:notice] = Flash.succcessfully_updated
        format.html { redirect_to admin_master_tabulars_path }
        format.js
      else
        flash[:error] = Flash.failed_updated
        format.html { render :edit }
        format.js
      end
    end
  end

  def destroy
    if @master_tabular.destroy
      record_history("#{current_user.name} menghapus data master tabular dengan nama #{@master_tabular.name}")
      flash[:notice] = Flash.successfully_deleted
      redirect_to admin_master_tabulars_path
    end
  end

  def show
    @master_tabulars = @master_tabular.descendants
    respond_to do |format|
      format.html
      format.xls
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at March 29 2013,
  # to generate layout by year
  def generate_layout
    layout_year ||= params[:date][:year]
    if MasterTabular.generate_layout!(layout_year)
      flash[:notice] = Flash.succcessfully_updated
      redirect_to admin_master_tabulars_path
    end
  end

  private
  def find_tabular
    @master_tabular = MasterTabular.find_by_id(params[:id])
    if @master_tabular.nil?
      flash[:error] = Flash.data_not_found
      redirect_to admin_master_tabulars_path
    end
  end

  def prepare_data
    @unit_options = GlobalClass.options_select(Unit)
  end
end
