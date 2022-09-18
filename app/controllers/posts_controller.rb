class PostsController < ApplicationController

    # def update
  #   ## needs to check session[:user_id] and match it to post.id
  #   ## if they match, user can update post
  #   ## if they dont', render an unauthorized error
  # end

  # def destroy
  #   ## needs to check session[:user_id] and match it to post.id
  #   ## if they match, user can update post
  #   ## if they dont', render an unauthorized error
  # end
  
  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post, status: 200
  end

  def create
    post = Post.create(new_post_params)

    if post.valid? 
      render json: post, status: 200
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end


  def new_post_params
    params.permit(:body, :for_sale, :how_many_tickets, :email, :concert_id, :user_id)
  end

end
