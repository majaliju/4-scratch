class SessionsController < ApplicationController

  ## validate ?

  ## logs in the user & cross-checks if the password is correct
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  # delete the user from the session
  def destroy
    session.delete :user_id
    head :no_content
  end

  # private

  # def set_session
  #   @session = Session.find(params[:id])
  # end
end
