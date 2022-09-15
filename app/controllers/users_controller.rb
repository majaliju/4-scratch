class UsersController < ApplicationController

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def create
    user = User.create(signup_user_params)

    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  # # update a specific user
  # def update
  #   if user.update(user_params)
  #     render json: user
  #   else
  #     render json: user.errors, status: :unprocessable_entity
  #   end
  # end

  # # delete a specific user
  # def destroy
  #   user.destroy
  # end

  private


  def signup_user_params
    params.permit(:username, :password, :password_confirmation, :email)
  end
end
