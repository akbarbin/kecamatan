class Admin::TabularsController < ApplicationController
  before_filter :require_login
  before_filter :find_tabular, only: [:edit, :update, :destroy]
  layout "data_table"

  def index
    @tabulars = Tabular.all#search(params[:filter]).page(params[:page])
  end

  def new
    @tabular = Tabular.new
  end

  def create
    @tabular = Tabular.new(params[:tabular])
    if @tabular.save
      flash[:notice] = Flash.add_data_success
      redirect_to admin_tabulars_path
    else
      flash[:error] = Flash.add_data_failed
      render :new
    end
  end

  def edit
  end

  def update
    if @tabular.update_attributes(params[:tabular])
      flash[:notice] = Flash.update_data_success
      redirect_to admin_tabulars_path
    else
      flash[:error] = Flash.update_data_failed
      render :edit
    end
  end

  def destroy
    if @tabular.destroy
      flash[:notice] = Flash.delete_data_success
      redirect_to admin_tabulars_path
    end
  end

  def show
  end

  private
  def find_tabular
    @tabular = Tabular.find_by_id(params[:id])
    if @tabular.nil?
      flash[:error] = Flash.not_found
      redirect_to admin_tabulars_path
    end
  end
end
