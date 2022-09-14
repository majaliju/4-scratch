class ArtistsController < ApplicationController
  
  def index
    artists = Artist.all
    render json: artists, status: 200
  end

  def show
    artist = Artist.find_by(id: params[:id])
    render json: artist
  end

  # def upcoming_shows
  #   byebug
  #   # artist = Artist.find_by(id: params[:id])
  #   concerts = Concert.find_by(artist_id: params[:id])

  #   upcoming_shows = 0
  #   selling = 0
  #   looking = 0

  #   concerts_array = concerts.pluck(:for_sale, :how_many_tickets)
  #   byebug
  #   # concerts.pluck { |each|
  #   #   upcoming_shows += 1
  #   #   if each.for_sale == true
  #   #     selling += 1
  #   #   elsif each.for_sale == false
  #   #     looking += 1
  #   #   end
  #   # }
  #   artistInfo = {:selling => selling, :looking => looking, :upcoming_shows => upcoming_shows}
  #   render json: artistInfo, status: 200
  # end

end
