class Venue < ApplicationRecord
  has_many :concerts

  has_many :posts, through: :concerts
end
