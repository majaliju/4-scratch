class Concert < ApplicationRecord
  belongs_to :venue
  belongs_to :artist
  has_many :tickets
  has_many :posts
  # not sure if the bottom two are valid 
  # has_many :genres, through: :artists
  # has_many :users, through: :posts
end
