# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ username: "Star Wars" }, { username: "Lord of the Rings" }])
#   Character.create(username: "Luke", movie: movies.first)

#  TODO RAILS
#^  seed with this link: https://teapuddles.medium.com/seeding-a-rails-backend-with-an-external-api-1eb192271005

#^ pull actual info from seatgeek API https://platform.seatgeek.com/

puts "---------------------- Removing old data..."
User.delete_all

puts "---------------------- Seeding as we speak..."

u1 = User.create({ username: "onlineguy1", password_digest: "123123123123" })
u2 = User.create({ username: "anotherDude", password_digest: "123123123123" })
u3 = User.create({ username: "p3rs0n", password_digest: "123123123123" })
u4 = User.create({ username: "thatsme", password_digest: "123123123123" })
u6 = User.create({ username: "testing", password_digest: "123123123123" })
u7 = User.create({ username: "asdf", password_digest: "123123123123" })
u8 = User.create({ username: "heythere", password_digest: "123123123123" })
u9 = User.create({ username: "12345", password_digest: "123123123123" })
u10 = User.create({ username: "me", password_digest: "123123123123" })
u11 = User.create({ username: "whatsup", password_digest: "123123123123" })

puts "---------------------- Success!!"
