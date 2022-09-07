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
u2 = User.create({ username: "anotherDude5", password: "123123123123" })
u3 = User.create({ username: "p3rs0n", password: "123123123123" })
u4 = User.create({ username: "thatsme", password: "123123123123" })
u6 = User.create({ username: "testing", password: "123123123123" })
u7 = User.create({ username: "asdf", password: "123123123123" })
u8 = User.create({ username: "johnnyboy", password: "123123123123" })
u9 = User.create({ username: "thatdude", password: "123123123123" })
u10 = User.create({ username: "musiclover123", password: "123123123123" })
u11 = User.create({ username: "ilovemj", password: "123123123123" })


#* the artists in the database
a1 = Artist.create({ name: 'Adele', genre_id: })
a2 = Artist.create({ name: 'John Legend', genre_id: })
a3 = Artist.create({ name: 'Lil Uzi Vert', genre_id: })
a4 = Artist.create({ name: 'Alicia Keys', genre_id: })
a5 = Artist.create({ name: 'Brent Faiyaz', genre_id: })
a6 = Artist.create({ name: 'Freddie Gibbs', genre_id: })
a7 = Artist.create({ name: 'Ed Sheeran', genre_id: })
a8 = Artist.create({ name: 'Chris Stapleton', genre_id: })
a9 = Artist.create({ name: 'Lil Wayne', genre_id: })
a10 = Artist.create({ name: 'Bad Bunny', genre_id: })
a11 = Artist.create({ name: 'Weeknd', genre_id: })
a12 = Artist.create({ name: 'Doja Cat', genre_id: })
a13 = Artist.create({ name: 'Dua Lipa', genre_id: })
a14 = Artist.create({ name: 'Billie Eilish', genre_id: })
a15 = Artist.create({ name: 'Lil Durk', genre_id: })
a16 = Artist.create({ name: 'Giveon', genre_id: })
a17 = Artist.create({ name: 'SZA', genre_id: })
a18 = Artist.create({ name: 'Tyler The Creator', genre_id: })
a19 = Artist.create({ name: 'Morgan Wallen', genre_id: })
a20 = Artist.create({ name: 'Arctic Monkeys', genre_id: })
a21 = Artist.create({ name: 'Red Hot Chili Peppers', genre_id: })
a22 = Artist.create({ name: 'Sturgil Simpson', genre_id: })
a23 = Artist.create({ name: 'Diplo', genre_id: })
a24 = Artist.create({ name: 'My Chemical Romance', genre_id: })
a25 = Artist.create({ name: 'Tiesto', genre_id: })
a26 = Artist.create({ name: 'Jason Aldean', genre_id: })
a27 = Artist.create({ name: 'Armin van Buuren', genre_id: })
a28 = Artist.create({ name: 'Calvin Harris', genre_id: })
a29 = Artist.create({ name: 'Luke Combs', genre_id: })
a30 = Artist.create({ name: 'Lilly Palmer', genre_id: })
a31 = Artist.create({ name: 'Greta Van Fleet', genre_id: })
a32 = Artist.create({ name: 'Cody Johnson', genre_id: })
a33 = Artist.create({ name: 'Kodak Black', genre_id: })
a34 = Artist.create({ name: 'Kali Uchis', genre_id: })
a35 = Artist.create({ name: 'Maneskin', genre_id: })
a36 = Artist.create({ name: 'Romeo Santos', genre_id: })
a37 = Artist.create({ name: 'Tchami', genre_id: })
a38 = Artist.create({ name: 'J Balvin', genre_id: })
a39 = Artist.create({ name: 'Malaa', genre_id: })
a40 = Artist.create({ name: 'Fall Out Boy', genre_id: })
a41 = Artist.create({ name: 'Daddy Yankee', genre_id: })
a42 = Artist.create({ name: 'Black Coffee', genre_id: })
a43 = Artist.create({ name: 'Maluma', genre_id: })
a44 = Artist.create({ name: 'Weezer', genre_id: })
a45 = Artist.create({ name: 'Karol G', genre_id: })
a46 = Artist.create({ name: 'Madlib', genre_id: })
a47 = Artist.create({ name: 'H.E.R.', genre_id: })
a48 = Artist.create({ name: 'Khalid', genre_id: })
a49 = Artist.create({ name: 'Jack White', genre_id: })
a50 = Artist.create({ name: 'Kurt Rosenwinkel', genre_id: })
a51 = Artist.create({ name: 'Jason Moran', genre_id: })
a52 = Artist.create({ name: 'Kaytranada', genre_id: })
a53 = Artist.create({ name: 'Jhené Aiko', genre_id: })
a54 = Artist.create({ name: 'Rick Ross', genre_id: })
a55 = Artist.create({ name: 'Meek Mill', genre_id: })
a56 = Artist.create({ name: 'Kygo', genre_id: })
a57 = Artist.create({ name: 'JAY-Z', genre_id: })
a58 = Artist.create({ name: 'Ozuna', genre_id: })
a59 = Artist.create({ name: 'Metallica', genre_id: })
a60 = Artist.create({ name: 'Alesso', genre_id: })
a61 = Artist.create({ name: 'Kehlani', genre_id: })
a62 = Artist.create({ name: 'Kanye West', genre_id: })
a63 = Artist.create({ name: 'Afrojack', genre_id: })
a64 = Artist.create({ name: 'Vijay Iyer', genre_id: })
a65 = Artist.create({ name: 'Ari Lennox', genre_id: })
a66 = Artist.create({ name: 'Amelie Lens', genre_id: })
a67 = Artist.create({ name: 'Ambrose Akinmusire', genre_id: })
a68 = Artist.create({ name: 'Michael Bublé', genre_id: })
a69 = Artist.create({ name: '', genre_id: })
a70 = Artist.create({ name: '', genre_id: })
a71 = Artist.create({ name: 'Peggy Gou', genre_id: })
a72 = Artist.create({ name: '', genre_id: })
a73 = Artist.create({ name: 'Summer Walker', genre_id: })
a74 = Artist.create({ name: '', genre_id: })
a75 = Artist.create({ name: '', genre_id: })
a76 = Artist.create({ name: '', genre_id: })
a77 = Artist.create({ name: 'Esperanza Spalding', genre_id: })
a78 = Artist.create({ name: '', genre_id: })
a79 = Artist.create({ name: 'Brad Mehdlau', genre_id: })
a80 = Artist.create({ name: '', genre_id: })
a81 = Artist.create({ name: '', genre_id: })
a82 = Artist.create({ name: '', genre_id: })
a83 = Artist.create({ name: '', genre_id: })

#* the genres in the database
g1 = Genre.create({name: 'Pop'})
g2 = Genre.create({name: 'Hip-Hop'})
g3 = Genre.create({name: 'Country'})
g4 = Genre.create({name: 'Rock'})
g5 = Genre.create({name: 'Jazz'})
g6 = Genre.create({name: 'Electronic'})
g7 = Genre.create({name: 'R&B'})
g8 = Genre.create({name: 'Latin'})


puts "---------------------- Success!!"
