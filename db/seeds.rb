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
a1 = Artist.create({ name: 'Adele', genre_id: g1.id})
a2 = Artist.create({ name: 'John Legend', genre_id: g1.id})
a3 = Artist.create({ name: 'Lil Uzi Vert', genre_id: g2.id})
a4 = Artist.create({ name: 'Alicia Keys', genre_id: g1.id})
a5 = Artist.create({ name: 'Brent Faiyaz', genre_id: g7.id})
a6 = Artist.create({ name: 'Freddie Gibbs', genre_id: g2.id})
a7 = Artist.create({ name: 'Ed Sheeran', genre_id: g1.id})
a8 = Artist.create({ name: 'Chris Stapleton', genre_id: g3.id})
a9 = Artist.create({ name: 'Lil Wayne', genre_id: g2.id})
a10 = Artist.create({ name: 'Bad Bunny', genre_id: g8.id})
a11 = Artist.create({ name: 'Weeknd', genre_id: g1.id})
a12 = Artist.create({ name: 'Doja Cat', genre_id: g1.id})
a13 = Artist.create({ name: 'Dua Lipa', genre_id: g1.id})
a14 = Artist.create({ name: 'Billie Eilish', genre_id: g1.id})
a15 = Artist.create({ name: 'Lil Durk', genre_id: g2.id})
a16 = Artist.create({ name: 'Giveon', genre_id: g7.id})
a17 = Artist.create({ name: 'SZA', genre_id: g7.id})
a18 = Artist.create({ name: 'Tyler The Creator', genre_id: g2.id})
a19 = Artist.create({ name: 'Morgan Wallen', genre_id: g3.id})
a20 = Artist.create({ name: 'Arctic Monkeys', genre_id: g4.id})
a21 = Artist.create({ name: 'Red Hot Chili Peppers', genre_id: g4.id})
a22 = Artist.create({ name: 'Sturgil Simpson', genre_id: g3.id})
a23 = Artist.create({ name: 'Diplo', genre_id: g6.id})
a24 = Artist.create({ name: 'My Chemical Romance', genre_id: g4.id})
a25 = Artist.create({ name: 'Tiesto', genre_id: g6.id})
a26 = Artist.create({ name: 'Jason Aldean', genre_id: g3.id})
a27 = Artist.create({ name: 'Armin van Buuren', genre_id: g6.id})
a28 = Artist.create({ name: 'Calvin Harris', genre_id: g1.id})
a29 = Artist.create({ name: 'Luke Combs', genre_id: g3.id})
a30 = Artist.create({ name: 'Lilly Palmer', genre_id: g6.id})
a31 = Artist.create({ name: 'Greta Van Fleet', genre_id: g4.id})
a32 = Artist.create({ name: 'Cody Johnson', genre_id: g3.id})
a33 = Artist.create({ name: 'Kodak Black', genre_id: g2.id})
a34 = Artist.create({ name: 'Kali Uchis', genre_id: g8.id})
a35 = Artist.create({ name: 'Maneskin', genre_id: g4.id})
a36 = Artist.create({ name: 'Romeo Santos', genre_id: g8.id})
a37 = Artist.create({ name: 'Tchami', genre_id: g6.id})
a38 = Artist.create({ name: 'J Balvin', genre_id: })
a39 = Artist.create({ name: 'Malaa', genre_id: g6.id})
a40 = Artist.create({ name: 'Fall Out Boy', genre_id: g4.id})
a41 = Artist.create({ name: 'Daddy Yankee', genre_id: g8.id})
a42 = Artist.create({ name: 'Black Coffee', genre_id: g6.id})
a43 = Artist.create({ name: 'Maluma', genre_id: g8.id})
a44 = Artist.create({ name: 'Weezer', genre_id: g4.id})
a45 = Artist.create({ name: 'Karol G', genre_id: g8.id})
a46 = Artist.create({ name: 'Madlib', genre_id: g2.id})
a47 = Artist.create({ name: 'H.E.R.', genre_id: g7.id})
a48 = Artist.create({ name: 'Khalid', genre_id: g1.id})
a49 = Artist.create({ name: 'Jack White', genre_id: g4.id})
a50 = Artist.create({ name: 'Kurt Rosenwinkel', genre_id: g5.id})
a51 = Artist.create({ name: 'Jason Moran', genre_id: g5.id})
a52 = Artist.create({ name: 'Kaytranada', genre_id: g6.id})
a53 = Artist.create({ name: 'Jhené Aiko', genre_id: g7.id})
a54 = Artist.create({ name: 'Rick Ross', genre_id: g2.id})
a55 = Artist.create({ name: 'Meek Mill', genre_id: g2.id})
a56 = Artist.create({ name: 'Kygo', genre_id: g6.id})
a57 = Artist.create({ name: 'JAY-Z', genre_id: g2.id})
a58 = Artist.create({ name: 'Ozuna', genre_id: g8.id})
a59 = Artist.create({ name: 'Metallica', genre_id: g4.id})
a60 = Artist.create({ name: 'Alesso', genre_id: g6.id})
a61 = Artist.create({ name: 'Kehlani', genre_id: g7.id})
a62 = Artist.create({ name: 'Kanye West', genre_id: g2.id})
a63 = Artist.create({ name: 'Afrojack', genre_id: g6.id})
a64 = Artist.create({ name: 'Vijay Iyer', genre_id: g5.id})
a65 = Artist.create({ name: 'Ari Lennox', genre_id: g7.id})
a66 = Artist.create({ name: 'Amelie Lens', genre_id: g6.id})
a67 = Artist.create({ name: 'Ambrose Akinmusire', genre_id: g5.id})
a68 = Artist.create({ name: 'Michael Bublé', genre_id: g5.id})
a69 = Artist.create({ name: 'Ava Max', genre_id: g1.id})
a70 = Artist.create({ name: 'Beyonce', genre_id: g1.id})
a71 = Artist.create({ name: 'Peggy Gou', genre_id: g6.id})
a72 = Artist.create({ name: 'Lady Gaga', genre_id: g1.id})
a73 = Artist.create({ name: 'Summer Walker', genre_id: g7.id})
a74 = Artist.create({ name: 'Lizzo', genre_id: g1.id})
a75 = Artist.create({ name: 'Lil Tjay', genre_id: g2.id})
a76 = Artist.create({ name: 'Lil Baby', genre_id: g2.id})
a77 = Artist.create({ name: 'Esperanza Spalding', genre_id: g5.id})
a78 = Artist.create({ name: 'Burna Boy', genre_id: g9.id})
a79 = Artist.create({ name: 'Brad Mehdlau', genre_id: g5.id})
a80 = Artist.create({ name: 'Wizkid', genre_id: g9.id})
a81 = Artist.create({ name: 'Mr Eazi', genre_id: g9.id})
a82 = Artist.create({ name: 'Sarkodie', genre_id: g9.id})
a83 = Artist.create({ name: 'Yemi Alade', genre_id: g9.id})
a84 = Artist.create({ name: 'Kizz Daniel', genre_id: g9.id})


#* the genres in the database
g1 = Genre.create({name: 'Pop'})
g2 = Genre.create({name: 'Hip-Hop'})
g3 = Genre.create({name: 'Country'})
g4 = Genre.create({name: 'Rock'})
g5 = Genre.create({name: 'Jazz'})
g6 = Genre.create({name: 'Electronic'})
g7 = Genre.create({name: 'R&B'})
g8 = Genre.create({name: 'Latin'})
g9 = Genre.create({name: 'Afrobeats'})


puts "---------------------- Success!!"
