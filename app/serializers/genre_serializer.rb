class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name
  ## render the concerts for each artist; create a custom serializer
  has_many :artists, serializer: ArtistGenreSerializer
end
