class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name
  ## set it here so I can feed the proper info to artists
  has_many :artists, serializer: ArtistGenreSerializer
end
