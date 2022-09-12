class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  ## render the concerts for each artist; create a custom serializer
  has_many :artists, serializer: ArtistGenreSerializer
end
