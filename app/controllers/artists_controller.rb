class ArtistsController < ApplicationController
  
  def index
    artists = Artist.all
    render json: artists, status: 200
  end

  def show
    artist = Artist.find_by(id: params[:id])
    render json: artist
  end

  def upcoming_shows
    artist = Artist.find_by(id: params[:id])
    ## for each concert, have a concert that increments each concert by 1 
  end

end
