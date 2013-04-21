class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_login
    if current_user.nil?
      flash[:error] = Flash.not_permited_to_access_page
      redirect_to root_path
    else
      return current_user
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at April 21 2013,
  # recording history user
  def record_history(note)
    activity = History.new
    activity.user_id = current_user.id
    activity.note = note
    activity.browser = request.env['HTTP_USER_AGENT']
    activity.ip_address = request.env['REMOTE_ADDR']
    activity.controller = controller_name
    activity.action = action_name
    activity.params = params.inspect
    activity.save!
  end
end