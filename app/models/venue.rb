class Venue < ApplicationRecord
  has_many :concerts
  has_many :tickets, through: :concerts
  has_many :posts, through: :concerts
end
