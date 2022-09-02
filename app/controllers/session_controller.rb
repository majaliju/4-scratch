class SessionController < ApplicationController


  ## just renders info about our session
  def session_info
    render json: session
  end

  ## send page_views to the frontend
  def page_views_check
    session[:page_views] = (session[:page_views] || 0) + 1
    render json: {page_views: session[:page_views]}
  end

  ## logs in the user and register them to the current session 
  def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end
end
