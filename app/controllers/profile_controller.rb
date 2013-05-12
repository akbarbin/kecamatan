class ProfileController < ApplicationController
  before_filter :require_user_login
  before_filter :find_user
  layout "user"

  def index
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # to update the profile current user.
  def modify
    if @user.update_attributes(params[:user])
      flash[:notice] = Flash.succcessfully_updated
      redirect_to profile_index_path
    else
      flash[:error] = Flash.failed_created
      render :index
    end
  end

  def edit_password
  end

  def save_password
    if User.authenticate(current_user.email, params[:user][:old_password])
      if ((params[:user][:password] == params[:user][:password_confirmation]) && !params[:user][:password_confirmation].blank?)
        current_user.password_confirmation = params[:user][:password_confirmation]
        current_user.password = params[:user][:password]

        if current_user.save!
          flash[:notice] = "Password successfully updated"
          redirect_to profile_index_path
        else
          flash[:alert] = "Password not changed"
          render :edit_password
        end

      else
        flash[:alert] = "New Password mismatch"
        render :edit_password
      end
    else
      flash[:alert] = "Old password incorrect"
      render :edit_password
    end
  end

  private
  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # to get before filter current user
  def find_user
    @user = current_user
  end
end
