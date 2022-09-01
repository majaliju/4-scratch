class Artist < ApplicationRecord
  has_many :concerts
  belongs_to :genre
  
  has_many :tickets, through: :concerts
  has_many :posts, through: :concerts
end
