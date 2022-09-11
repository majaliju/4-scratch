class PostSerializer < ActiveModel::Serializer
  attributes :id, :body, :for_sale, :how_many_tickets
  belongs_to :user
  belongs_to :concert
end
