class Concert < ApplicationRecord
  belongs_to :venue
  belongs_to :artist
  has_many :tickets
  has_many :posts
  # has_many :genres, through: :artists
end
