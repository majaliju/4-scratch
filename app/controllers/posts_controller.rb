class PostsController < ApplicationController

  def index
    posts = Post.all
    render json: posts, status: 200
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post
  end

  def update
    puts "update for post"
    ## needs to check session[:user_id] and match it to post.id
    ## if they match, user can update post
    ## if they dont', render an unauthorized error
  end

  def destroy
    puts "destroy for post"
    ## needs to check session[:user_id] and match it to post.id
    ## if they match, user can update post
    ## if they dont', render an unauthorized error
  end
end
