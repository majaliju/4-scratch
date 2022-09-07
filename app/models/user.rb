class User < ApplicationRecord
  has_secure_password

  validates :username, presence: :true, uniqueness: true
  ##! had issues with BCrypt when attempting to set length of :password
  validates :password, length: { minimum: 8}

  has_many :posts
end
