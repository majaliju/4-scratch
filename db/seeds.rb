# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ username: "Star Wars" }, { username: "Lord of the Rings" }])
#   Character.create(username: "Luke", movie: movies.first)

# pull actual info from seatgeek API https://platform.seatgeek.com/


puts '---------------------- Seeding as we speak...'

u1 = User.create({username: 'onlineguy1', password: '123'})
u2 = User.create({username: 'anotherDude', password: '123'})
u3 = User.create({username: 'p3rs0n', password: '123'})
u4 = User.create({username: 'thatsme', password: '123'})
u6 = User.create({username: 'testing', password: '123'})
u7 = User.create({username: 'asdf', password: '123'})
u8 = User.create({username: 'heythere', password: '123'})
u9 = User.create({username: '12345', password: '123'})
u10 = User.create({username: 'me', password: '123'})
u11 = User.create({username: 'whatsup', password: '123'})

puts '---------------------- Success!!'