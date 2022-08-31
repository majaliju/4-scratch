class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  def show_session
    render json: session
  end

  def index
    session[:session_namer] ||= "session here works"
    cookies[:cookies_tester] ||= "Cookies work!"
    render json: { session: session, cookies: cookies.to_hash }
  end
end
