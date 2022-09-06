class UsersController < ApplicationController

  # #show all of our users
  # def index
  #   users = User.all

  #   render json: users
  # end

  def index
    users = User.all
    render json: users, status: 200
  end

  # get our specific user
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Either: Unprocessable Entity or User Not Found" }, status: :unprocessable_entity
    end
  end

  # create a new user
  def create
    user = User.create(user_params)

    if user.valid?
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
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

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
