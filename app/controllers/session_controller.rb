class SessionController < ApplicationController

  ## gotta figure out this method ; somethings not working
  ## just use sessionID instead of page_views or stranger
  def session_info
    render json: session
  end


  def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end
end
