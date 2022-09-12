class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image

  has_many :posts, through: :concerts, serializer: PostSerializer
end
