class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :how_many_left, :is_vip, :concert_id
end
