class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  
  belongs_to :genre, serializer: GenreSerializer
  has_many :concerts, serializer: ConcertSerializer
  has_many :posts, through: :concerts, serializer: PostSerializer
end
