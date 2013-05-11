class ProfileController < ApplicationController
  before_filter :require_user_login
end
