class User < ApplicationRecord
  has_secure_password

  validates :username, presence: :true, uniqueness: true
  validates :password, length: { minimum: 8, maximum: 254}
  validates_presence_of :email
    validates_format_of :email, with: EMAIL_REGEX
  # validates :my_email_attribute, email: true, presence: true

  has_many :posts
  has_many :concerts, through: :posts

  private

  EMAIL_REGEX =^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$ 
  def valid_email? email
      email =~EMAIL_REGEX
  end
end
