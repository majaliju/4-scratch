class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  def show_session
    render json: session
  end

  def show_cookies
    cookies[:cookies_tester] ||= "Cookies work!"
    render json: {cookies: cookies.to_hash }
  end
end
