class PostSerializer < ActiveModel::Serializer
  attributes :id, :time_posted, :for_sale, :concert_id, :user_id
end
