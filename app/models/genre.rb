class Genre < ApplicationRecord
  has_many :artists
  has_many :concerts, through: :artists
end
