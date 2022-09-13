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
    concerts = artist.concerts
    puts concerts
  end

end
