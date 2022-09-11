class User < ApplicationRecord
  has_secure_password

  validates :username, presence: :true, uniqueness: true
  validates :password, length: { minimum: 8}

  has_many :posts
  has_many :concerts, through: :posts
end
