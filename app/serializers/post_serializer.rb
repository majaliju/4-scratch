class PostSerializer < ActiveModel::Serializer
  belongs_to :concert
  belongs_to :artist, through: :concerts
end
