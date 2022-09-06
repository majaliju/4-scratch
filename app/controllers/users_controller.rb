class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # #show all of our users
  # def index
  #   users = User.all

  #   render json: users
  # end

  # get our specific user
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  # create a new user
  def create
    user = User.create!(user_params)
    render json: user, status: :created

    # if user.valid?
    #   render json: user, status: :created
    # else
    #   render json: user.errors, status: :unprocessable_entity
    # end
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
    params.require(:user).permit(:id, :username, :password, :password_confirmation)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
