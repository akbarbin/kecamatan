class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  # Created by [muhamadakbarbw@gmail.com] at April 21 2013,
  # Authenticate user type for admin site
  def require_admin_login
    if current_user.nil? || !current_user.admin?
      flash.now[:error] = Flash.not_permited_to_access_page
      redirect_to "/404.html"
    else
      return current_user
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at April 21 2013,
  # Authenticate user type for admin site
  def require_user_login
    if current_user.nil? || current_user.admin?
      flash.now[:error] = Flash.not_permited_to_access_page
      redirect_to "/404.html"
    else
      return current_user
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at May 11 2013,
  # After login should be on dashboards
  def redirect_to_dashboards
    if current_user && current_user.admin?
      redirect_to admin_dashboards_path
    elsif current_user && current_user.user?
      redirect_to dashboards_path
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