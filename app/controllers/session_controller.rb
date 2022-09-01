class SessionController < ApplicationController

  def first_visit
    session[:first_visit] ||= true
    session[:page_views] ||= 0 
    session[:page_views] = session[:page_views] + 1
    if session[:page_views] > 1
      session[:first_visit] = false
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
