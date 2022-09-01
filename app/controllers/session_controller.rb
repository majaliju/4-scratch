class SessionController < ApplicationController

  ## gotta figure out this method ; somethings not working
  ## just use sessionID instead of page_views or stranger
  def stranger
    session[:stranger] ||= true
    session[:page_views] ||= 0 
    session[:page_views] = session[:page_views] + 1
    if session[:page_views] > 1
      session[:stranger] = false
      render json: session
  else 
    render json: session
  end
end


  def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end
end
