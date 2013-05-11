class Admin::UsersController < ApplicationController
  before_filter :require_login
  before_filter :find_user, only: [:edit, :update, :destroy]
  layout "admin"

  def index
    @users = User.search(params[:user]).paginate(per_page: DEFAULT_PER_PAGE, page: params[:page])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = Flash.successfully_created
      redirect_to admin_users_path
    else
      flash.now[:error] = Flash.failed_created
      render "new"
    end
  end

  def update
    if @user.update_attributes(params[:user])
      flash[:notice] = Flash.succcessfully_updated
      redirect_to admin_users_path
    else
      flash[:error] = Flash.update_data_failed
      render "edit"
    end
  end

  def destroy
    if @user.move_to_trash
      flash[:notice] = Flash.successfully_deleted
      redirect_to admin_users_path
    end
  end

  def show
  end

  private
  def find_user
    @user = User.find_by_id(params[:id])
    if @user.nil?
      flash[:error] = Flash.not_found
      redirect_to admin_users_path
    end
  end
end