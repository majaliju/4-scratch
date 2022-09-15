class User < ApplicationRecord
  has_secure_password

  validates :username, presence: :true, uniqueness: true
  validates :password, length: { minimum: 8, maximum: 254}, presence: true
  validates :my_email_attribute, email: true, presence: true

  has_many :posts
  has_many :concerts, through: :posts
end
