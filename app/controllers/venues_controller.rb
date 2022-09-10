class VenuesController < ApplicationController

  def index
    venues = Venues.all
    render json: venues, status: 200
  end

  def show
    venue = Venues.find_by(id: params[:id])
    render json: venue
  end

end
