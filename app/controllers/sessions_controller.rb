class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      if user.admin?
        redirect_to admin_dashboards_path, notice: Flash.successfully_signed_in
      else
        redirect_to dashboards_path, notice: Flash.successfully_signed_in
      end
    else
      flash.now[:error] = Flash.invalid_email_and_password
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: Flash.successfully_signed_out
  end
end