class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :artist_id, :venue_id
end
