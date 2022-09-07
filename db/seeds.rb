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

#* seeding an initial 11 users for login tests
u1 = User.create({ username: "onlineguy1", password: "123123123123" })
u2 = User.create({ username: "anotherDude", password: "123123123123" })
u3 = User.create({ username: "p3rs0n", password: "123123123123" })
u4 = User.create({ username: "thatsme", password: "123123123123" })
u6 = User.create({ username: "testing", password: "123123123123" })
u7 = User.create({ username: "asdf", password: "123123123123" })
u8 = User.create({ username: "heythere", password: "123123123123" })
u9 = User.create({ username: "thatdude", password: "123123123123" })
u10 = User.create({ username: "me", password: "123123123123" })
u11 = User.create({ username: "whatsup", password: "123123123123" })


#* the artists in the database
a1 = Artist.create({ name: 'Adele', genre_id: })
a2 = Artist.create({ name: 'John Legend', genre_id: })
a3 = Artist.create({ name: 'Lil Uzi Vert', genre_id: })
a4 = Artist.create({ name: 'Alicia Keys', genre_id: })
a5 = Artist.create({ name: 'Brent Faiyaz', genre_id: })
a6 = Artist.create({ name: 'Freddie Gibbs', genre_id: })
a7 = Artist.create({ name: 'Ed Sheeran', genre_id: })
a8 = Artist.create({ name: '', genre_id: })
a9 = Artist.create({ name: '', genre_id: })
a10 = Artist.create({ name: '', genre_id: })
a11 = Artist.create({ name: '', genre_id: })
a12 = Artist.create({ name: '', genre_id: })
a13 = Artist.create({ name: '', genre_id: })
a14 = Artist.create({ name: '', genre_id: })
a15 = Artist.create({ name: '', genre_id: })
a16 = Artist.create({ name: '', genre_id: })
a17 = Artist.create({ name: '', genre_id: })
a18 = Artist.create({ name: '', genre_id: })
a19 = Artist.create({ name: '', genre_id: })
a20 = Artist.create({ name: '', genre_id: })
a21 = Artist.create({ name: '', genre_id: })
a22 = Artist.create({ name: '', genre_id: })
a23 = Artist.create({ name: '', genre_id: })
a24 = Artist.create({ name: '', genre_id: })
a25 = Artist.create({ name: '', genre_id: })
a26 = Artist.create({ name: '', genre_id: })
a27 = Artist.create({ name: '', genre_id: })
a28 = Artist.create({ name: '', genre_id: })

#*
g1 = Genre.create({name: 'Pop'})
g2 = Genre.create({name: 'Hip-Hop'})
g3 = Genre.create({name: 'Country'})
g4 = Genre.create({name: 'Rock'})
g5 = Genre.create({name: 'Jazz'})
g6 = Genre.create({name: 'Electronic'})
g7 = Genre.create({name: 'R&B'})
g8 = Genre.create({name: ''})
g9 = Genre.create({name: ''})
g10 = Genre.create({name: ''})

puts "---------------------- Success!!"
