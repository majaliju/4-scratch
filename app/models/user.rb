class User < ApplicationRecord
  has_secure_password

  validates :username, presence: :true, uniqueness: true
  validates :password_digest, presence: true, length: { in: 6..30 }

  has_many :posts
end
