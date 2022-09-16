class SessionsController < ApplicationController


  ## logs in the user & cross-checks if the password is correct
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: 200
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  # delete the user from the session
  def destroy
    session.delete :user_id
    head :no_content
  end


end
