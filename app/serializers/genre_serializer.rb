class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name, :image

  
  has_many :artists, serializer: ArtistGenreSerializer
  has_many :concerts, through: :artists, serializer: ConcertSerializer
  has_many :posts, through: :concerts, serializer: PostSerializer
end
