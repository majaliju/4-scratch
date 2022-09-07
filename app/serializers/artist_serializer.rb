class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :solo_act
  ## pull genre name from a nested genre
end
