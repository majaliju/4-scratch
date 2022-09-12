class Genre < ApplicationRecord
  has_many :artists
  has_many :concerts, through: :artists
  has_many :posts, through: :concerts
end
