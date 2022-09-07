class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name
  ## pull genre name from a nested genre
  belongs_to :genre, serializer: ArtistGenreSerializer
end
