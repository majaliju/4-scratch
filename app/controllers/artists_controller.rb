class ArtistsController < ApplicationController
  
  def index
    artists = Artist.all
    render json: artists, status: 200
  end

  def show
    artist = Artist.find_by(id: params[:id])
    render json: artist
  end

  private

  def artist_params
  end
end
