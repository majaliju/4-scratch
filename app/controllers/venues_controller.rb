class VenuesController < ApplicationController

  def index
    venues = Venue.all
    render json: venues, status: 200
  end

  def show
    venue = Venue.find_by(id: params[:id])
    render json: venue
  end

end
