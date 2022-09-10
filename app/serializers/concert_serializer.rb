class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date
  
  belongs_to :artist, serializer: ArtistSerializer
  belongs_to :venue, serializer: VenueSerializer
end
