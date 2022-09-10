class ConcertsController < ApplicationController
  def index
    concerts = Concert.all
    render json: concerts, status: 200
  end

  def show
    concert = Concert.find_by(id: params[:id])
    render json: concert
  end
end
