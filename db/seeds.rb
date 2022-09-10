
#  TODO RAILS
#^  seed with this link: https://teapuddles.medium.com/seeding-a-rails-backend-with-an-external-api-1eb192271005

# require 'rest-client'

# def lastfm_api_key
#   ENV["LASTFM_API_KEY"]
# end

# def artists_dataset
#   api_data = {key: lastfm_api_key}

#   artists = RestClient.get("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=${api_data[:key]}&format=json")
# end

puts "---------------------- The Manual method!! "

puts "---------------------- Removing old data..."
User.delete_all
Genre.delete_all
Artist.delete_all
Venue.delete_all

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


#* the artists in the database
a1 = Artist.create({ name: 'Adele', image: "https://i.imgur.com/zmGbfKS.jpg", genre_id: g1.id})
a2 = Artist.create({ name: 'John Legend', image: "https://i.imgur.com/Nogyupg.jpg", genre_id: g1.id})
a3 = Artist.create({ name: 'Lil Uzi Vert', image: "https://i.imgur.com/ym9sg7Z.jpg", genre_id: g2.id})
a4 = Artist.create({ name: 'Alicia Keys', image: "https://i.imgur.com/L7JvoeU.jpg", genre_id: g1.id})
a5 = Artist.create({ name: 'Brent Faiyaz', image: "https://i.imgur.com/srjaIKm.jpg", genre_id: g7.id})
a6 = Artist.create({ name: 'Freddie Gibbs', image: "https://i.imgur.com/JO6zENC.jpg", genre_id: g2.id})
a7 = Artist.create({ name: 'Ed Sheeran', image: "https://i.imgur.com/byaK7We.jpg", genre_id: g1.id})
a8 = Artist.create({ name: 'Chris Stapleton', image: "https://i.imgur.com/ilvQrNq.jpg" , genre_id: g3.id})
a9 = Artist.create({ name: 'Lil Wayne', image: "https://i.imgur.com/O5nfmjA.jpg" , genre_id: g2.id})
a10 = Artist.create({ name: 'Bad Bunny', image: "https://i.imgur.com/GgrWugW.jpg" , genre_id: g8.id})
a11 = Artist.create({ name: 'Weeknd', image: "https://i.imgur.com/Vof1Rkx.jpg" , genre_id: g1.id})
a12 = Artist.create({ name: 'Doja Cat', image: "https://i.imgur.com/KrO0Oyj.jpg" , genre_id: g1.id})
a13 = Artist.create({ name: 'Dua Lipa', image: "https://i.imgur.com/GypViKU.jpg" , genre_id: g1.id})
a14 = Artist.create({ name: 'Billie Eilish', image: "https://i.imgur.com/cnPyv0E.jpg" , genre_id: g1.id})
a15 = Artist.create({ name: 'Lil Durk', image: "https://i.imgur.com/CKV8jWo.jpg" , genre_id: g2.id})
a16 = Artist.create({ name: 'Giveon', image: "https://i.imgur.com/T0hSO6u.jpg" , genre_id: g7.id})
a17 = Artist.create({ name: 'SZA', image: "https://i.imgur.com/1bREHYT.jpg" , genre_id: g7.id})
a18 = Artist.create({ name: 'Tyler The Creator', image: "https://i.imgur.com/IxzKZKD.jpg" , genre_id: g2.id})
a19 = Artist.create({ name: 'Morgan Wallen', image: "https://i.imgur.com/dvRe0Kn.png" , genre_id: g3.id})
a20 = Artist.create({ name: 'Arctic Monkeys', image: "https://i.imgur.com/dAjWJOZ.jpg" , genre_id: g4.id})
a21 = Artist.create({ name: 'Red Hot Chili Peppers', image: "https://i.imgur.com/eGCrztC.jpg" , genre_id: g4.id})
a22 = Artist.create({ name: 'Sturgil Simpson', image: "https://i.imgur.com/4ovKnb5.jpg" , genre_id: g3.id})
a23 = Artist.create({ name: 'Diplo', image: "https://i.imgur.com/AuZIlO2.jpg" , genre_id: g6.id})
a24 = Artist.create({ name: 'My Chemical Romance', image: "https://i.imgur.com/gSDuBrA.jpg", genre_id: g4.id})
a25 = Artist.create({ name: 'Tiesto', image: "https://i.imgur.com/tufprFt.jpg", genre_id: g6.id})
a26 = Artist.create({ name: 'Jason Aldean', image: "https://i.imgur.com/Vl0OSNL.jpg", genre_id: g3.id})
a27 = Artist.create({ name: 'Armin van Buuren', image: "https://i.imgur.com/Ix6y9iX.jpg", genre_id: g6.id})
a28 = Artist.create({ name: 'Calvin Harris', image: "https://i.imgur.com/ZJWR416.jpg", genre_id: g1.id})
a29 = Artist.create({ name: 'Luke Combs', image: "https://i.imgur.com/pCd7ouv.jpg", genre_id: g3.id})
a30 = Artist.create({ name: 'Lilly Palmer', image: "https://i.imgur.com/ELd6IlN.jpg", genre_id: g6.id})
a31 = Artist.create({ name: 'Greta Van Fleet', image: "https://i.imgur.com/yUr25bu.jpg", genre_id: g4.id})
a32 = Artist.create({ name: 'Cody Johnson', image: "https://i.imgur.com/XVRbmji.jpg", genre_id: g3.id})
a33 = Artist.create({ name: 'Kodak Black', image: "https://i.imgur.com/NLzCqZR.jpg", genre_id: g2.id})
a34 = Artist.create({ name: 'Kali Uchis', image: "https://i.imgur.com/CNIB3cV.jpg", genre_id: g8.id})
a35 = Artist.create({ name: 'Maneskin', image: "https://i.imgur.com/6WnbZ7A.jpg", genre_id: g4.id})
a36 = Artist.create({ name: 'Romeo Santos', image: "https://i.imgur.com/24r5SPq.jpg", genre_id: g8.id})
a37 = Artist.create({ name: 'Tchami', image: "https://i.imgur.com/vDQRP0e.jpg", genre_id: g6.id})
a38 = Artist.create({ name: 'J Balvin', image: "https://i.imgur.com/rafuO77.jpg", genre_id: g8.id})
a39 = Artist.create({ name: 'Malaa', image: "https://i.imgur.com/u2BfOtF.jpg", genre_id: g6.id})
a40 = Artist.create({ name: 'Fall Out Boy', image: "https://i.imgur.com/3iCxtNl.jpg", genre_id: g4.id})
a41 = Artist.create({ name: 'Daddy Yankee', image: "https://i.imgur.com/1dX64cy.jpg", genre_id: g8.id})
a42 = Artist.create({ name: 'Black Coffee', image: "https://i.imgur.com/mD7Xn99.jpg", genre_id: g6.id})
a43 = Artist.create({ name: 'Maluma', image: "https://i.imgur.com/G3zViQy.jpg", genre_id: g8.id})
a44 = Artist.create({ name: 'Weezer', image: "https://i.imgur.com/Kk4ws16.jpg", genre_id: g4.id})
a45 = Artist.create({ name: 'Karol G', image: "https://i.imgur.com/OarUGay.jpg", genre_id: g8.id})
a46 = Artist.create({ name: 'Madlib', image: "https://i.imgur.com/e1u9p0j.jpg", genre_id: g2.id})
a47 = Artist.create({ name: 'H.E.R.', image: "https://i.imgur.com/vqzwReA.png", genre_id: g7.id})
a48 = Artist.create({ name: 'Khalid', image: "https://i.imgur.com/dvclZVT.jpg", genre_id: g1.id})
a49 = Artist.create({ name: 'Jack White', image: "https://i.imgur.com/sqJABGh.jpg", genre_id: g4.id})
a50 = Artist.create({ name: 'Kurt Rosenwinkel', image: "https://i.imgur.com/TUEtX4r.jpg", genre_id: g5.id})
a51 = Artist.create({ name: 'Jason Moran', image: "https://i.imgur.com/jIWmopO.jpg", genre_id: g5.id})
a52 = Artist.create({ name: 'Kaytranada', image: "https://i.imgur.com/dbmcUx0.jpg", genre_id: g6.id})
a53 = Artist.create({ name: 'Jhené Aiko', image: "https://i.imgur.com/YNNX49k.jpg", genre_id: g7.id})
a54 = Artist.create({ name: 'Rick Ross', image: "https://i.imgur.com/T9bUJPy.jpg", genre_id: g2.id})
a55 = Artist.create({ name: 'Meek Mill', image: "https://i.imgur.com/69H3NO5.jpg", genre_id: g2.id})
a56 = Artist.create({ name: 'Kygo', image: "https://i.imgur.com/NdJVLSG.jpg", genre_id: g6.id})
a57 = Artist.create({ name: 'JAY-Z', image: "https://i.imgur.com/F40UiW1.jpg", genre_id: g2.id})
a58 = Artist.create({ name: 'Ozuna', image: "https://i.imgur.com/fNrEyOq.jpg", genre_id: g8.id})
a59 = Artist.create({ name: 'Metallica', image: "https://i.imgur.com/I7audis.jpg", genre_id: g4.id})
a60 = Artist.create({ name: 'Alesso', image: "https://i.imgur.com/UoGof7r.jpg", genre_id: g6.id})
a61 = Artist.create({ name: 'Kehlani', image: "https://i.imgur.com/VlPYGck.jpg", genre_id: g7.id})
a62 = Artist.create({ name: 'Kanye West', image: "https://i.imgur.com/RFEjHEL.jpg", genre_id: g2.id})
a63 = Artist.create({ name: 'Afrojack', image: "https://i.imgur.com/9FeFyDj.jpg", genre_id: g6.id})
a64 = Artist.create({ name: 'Vijay Iyer', image: "https://i.imgur.com/ldT5xj1.jpg", genre_id: g5.id})
a65 = Artist.create({ name: 'Ari Lennox', image: "https://i.imgur.com/rfL7QdG.jpg", genre_id: g7.id})
a66 = Artist.create({ name: 'Amelie Lens', image: "https://i.imgur.com/5fnRjWG.jpg", genre_id: g6.id})
a67 = Artist.create({ name: 'Ambrose Akinmusire', image: "https://i.imgur.com/wVsfw7I.jpg", genre_id: g5.id})
a68 = Artist.create({ name: 'Michael Bublé', image: "https://i.imgur.com/UiFQ7G3.jpg", genre_id: g5.id})
a69 = Artist.create({ name: 'Ava Max', image: "https://i.imgur.com/QgztXyB.jpg", genre_id: g1.id})
a70 = Artist.create({ name: 'Beyonce', image: "https://i.imgur.com/bSUQpTU.jpg", genre_id: g1.id})
a71 = Artist.create({ name: 'Peggy Gou', image: "https://i.imgur.com/R9se7BO.jpg", genre_id: g6.id})
a72 = Artist.create({ name: 'Lady Gaga', image: "https://i.imgur.com/CJDl0dG.jpg", genre_id: g1.id})
a73 = Artist.create({ name: 'Summer Walker', image: "https://i.imgur.com/n4kCZ11.jpg", genre_id: g7.id})
a74 = Artist.create({ name: 'Lizzo', image: "https://i.imgur.com/slaU6Nz.jpg", genre_id: g1.id})
a75 = Artist.create({ name: 'Lil Tjay', image: "https://i.imgur.com/a1F7ZSE.jpg", genre_id: g2.id})
a76 = Artist.create({ name: 'Lil Baby', image: "https://i.imgur.com/5UOw4cv.jpg", genre_id: g2.id})
a77 = Artist.create({ name: 'Esperanza Spalding', image: "https://i.imgur.com/Q0MgPOl.jpg", genre_id: g5.id})
a78 = Artist.create({ name: 'Burna Boy', image: "https://i.imgur.com/bAMyOqB.jpg", genre_id: g9.id})
a79 = Artist.create({ name: 'Brad Mehdlau', image: "https://i.imgur.com/8syl1TV.jpg", genre_id: g5.id})
a80 = Artist.create({ name: 'Wizkid', image: "https://i.imgur.com/8z24UfH.jpg", genre_id: g9.id})
a81 = Artist.create({ name: 'Mr Eazi', image: "https://i.imgur.com/gfC9ken.jpg", genre_id: g9.id})
a82 = Artist.create({ name: 'Sarkodie', image: "https://i.imgur.com/uxVDpl5.jpg", genre_id: g9.id})
a83 = Artist.create({ name: 'Yemi Alade', image: "https://i.imgur.com/kVlZ5Ln.jpg", genre_id: g9.id})
a84 = Artist.create({ name: 'Kizz Daniel', image: "https://i.imgur.com/K6jBsnW.jpg", genre_id: g9.id})


#* the venues in the database
v1 = Venue.create({name: "Hollywood Bowl", location: "Los Angeles, CA, USA", image: "https://i.imgur.com/SVPuMOA.jpg"})
v2 = Venue.create({name: "Red Rocks Amphitheatre", location: "Morrison, CO, USA", image: "https://i.imgur.com/M0CTfvb.jpg"})
v3 = Venue.create({name: "Radio City Music Hall", location: "New York, NY, USA", image: "https://i.imgur.com/H0wJmtx.jpg"})
v4 = Venue.create({name: "Tabernacle", location: "Atlanta, GA, USA", image: "https://i.imgur.com/B6tVpYo.jpg"})
v5 = Venue.create({name: "Gorge Amphitheatre", location: "George, WA, USA", image: "https://i.imgur.com/yErJyeZ.jpg"})
v6 = Venue.create({name: "Grand Ole Opry", location: "Nashville, TN, USA", image: "https://i.imgur.com/AJi4PLJ.jpg"})
v7 = Venue.create({name: "Ryman Auditorium", location: "Nashville, TN, USA", image: "https://i.imgur.com/KCf9Xb4.jpg"})
v8 = Venue.create({name: "Madison Square Garden", location: "New York, NY, USA", image: "https://i.imgur.com/0gd1dD0.jpg"})
v9 = Venue.create({name: "The Greek Theatre", location: "Los Angeles, CA, USA", image: "https://i.imgur.com/7QMIPzR.png"})
v9 = Venue.create({name: "Merriweather Post Pavilion", location: "Columbia, MD, USA", image: "https://i.imgur.com/uTGgAT6.jpg"})
v10 = Venue.create({name: "The Fillmore", location: "San Francisco, CA, USA", image: "https://i.imgur.com/aW4sPH8.jpg"})
v11 = Venue.create({name: "Bowery Ballroom", location: "New York, NY, USA", image: "https://i.imgur.com/qQN0hVK.jpg"})
v12 = Venue.create({name: "Metro Chicago", location: "Chicago, IL, USA", image: "https://i.imgur.com/UNiG1DV.jpg"})
v13 = Venue.create({name: "Stubbs", location: "Austin, TX, USA", image: "https://i.imgur.com/Ev0r7Zw.jpg"})
v14 = Venue.create({name: "Great Scott", location: "Boston, MA, USA", image: "https://i.imgur.com/MrIiJ9q.jpg"})
v15 = Venue.create({name: "Royal Albert Hall", location: "London, UK", image: "https://i.imgur.com/Y1MJL5C.jpg"})
v16 = Venue.create({name: "Sydney Opera House", location: "Sydney, Australia", image: "https://i.imgur.com/q76fpdn.jpg"})
v17 = Venue.create({name: "The O2 Arena", location: "London, UK", image: "https://i.imgur.com/XfpSr2w.jpg"})
v18 = Venue.create({name: "Eventim Apollo", location: "London, UK", image: "https://i.imgur.com/3vKa6qp.jpg"})
v19 = Venue.create({name: "Dubai Opera House", location: "Dubai, UAE", image: "https://i.imgur.com/seuJ6ya.jpg"})
v20 = Venue.create({name: "Ronnie Scotts", location: "London, UK", image: "https://i.imgur.com/Xt6bRkT.jpg"})
v21 = Venue.create({name: "Musikverein", location: "Vienna, Austria", image: "https://i.imgur.com/hz0zpzg.jpg"})
v22 = Venue.create({name: "Verona Arena", location: "Verona, Italy", image: "https://i.imgur.com/R82xj4C.jpg"})
v23 = Venue.create({name: "Arena of Nîmes", location: "Nîmes, France", image: "https://i.imgur.com/DbEXkKP.jpg"})
v24 = Venue.create({name: "Waldbuhne", location: "Berlin, Germany", image: "https://i.imgur.com/4YNVVe2.jpg"})
v25 = Venue.create({name: "Yuyintang", location: "Shanghai, China", image: "https://i.imgur.com/SGSwUQW.jpg"})
v26 = Venue.create({name: "Felsenreitschule", location: "Salzburg, Austria", image: "https://i.imgur.com/a8HRKyo.jpg"})
v27 = Venue.create({name: "Teatro Antico di Taormina", location: "Taormina, Italy", image: "https://i.imgur.com/w8FpXUk.jpg"})
v28 = Venue.create({name: "Mao Livehouse", location: "Shanghai, China", image: "https://i.imgur.com/CghhYym.jpg"})
v29 = Venue.create({name: "Nippon Budokan", location: "Tokyo, Japan", image: "https://i.imgur.com/mMnt6KX.jpg"})
v30 = Venue.create({name: "Dalhalla", location: "Rättvik, Sweden", image: "https://i.imgur.com/xlviU4d.jpg"})
v31 = Venue.create({name: "House of Eternal Return", location: "Sante Fe, New Mexico, USA", image: "https://i.imgur.com/k9qXxmG.jpg"})
v32 = Venue.create({name: "Slane Castle", location: "County Meath, Ireland", image: "https://i.imgur.com/SQBIzTz.jpg"})
v33 = Venue.create({name: "Jay Pritzker Pavilion ", location: "Chicago, IL, USA", image: "https://i.imgur.com/21140aZ.jpg"})
v34 = Venue.create({name: "Tower Theater,", location: "Philadelphia, PA, USA", image: "https://i.imgur.com/YWwDAth.jpg"})
v35 = Venue.create({name: "El Club", location: "Detroit, MI, USA", image: "https://i.imgur.com/6Jm3E6Q.jpg"})
v36 = Venue.create({name: "9:30 Club", location: "Washington DC, USA", image: "https://i.imgur.com/Dxt35tz.jpg"})
v37 = Venue.create({name: "Brooklyn Steel", location: "Brooklyn, NY, USA", image: "https://i.imgur.com/SmFrzTC.jpg"})
v38 = Venue.create({name: "Brooklyn Mirage", location: "Brooklyn, NY, USA", image: "https://i.imgur.com/aWcIOQn.jpg"})
v39 = Venue.create({name: "Ottobar", location: "Baltimore, MD, USA", image: "https://i.imgur.com/FCnAseu.jpg"})
v40 = Venue.create({name: "The 100 Club", location: "London, UK", image: "https://i.imgur.com/xNI1qsI.jpg"})
v41 = Venue.create({name: "Sidecar", location: "Barcelona, Spain", image: "https://i.imgur.com/NDVFXsh.jpg"})
v42 = Venue.create({name: "The Drake Underground", location: "Toronto, Canada", image: "https://i.imgur.com/5X8oWgy.jpg"})
v43 = Venue.create({name: "Zapata Café Bar", location: "Berlin, Germany", image: "https://i.imgur.com/QJ3OnGm.jpg"})
v44 = Venue.create({name: "Prinzenbar", location: "Berlin, Germany", image: "https://i.imgur.com/kYLonnD.jpg"})
v45 = Venue.create({name: "Vicar Street", location: "Dublin, Ireland", image: "https://i.imgur.com/BhPMe0X.jpg"})
v46 = Venue.create({name: "Cherry Bar ", location: "Melbourne, Australia", image: "https://i.imgur.com/oRHur7E.jpg"})
v47 = Venue.create({name: "The Fonda", location: "Los Angeles, CA, USA", image: "https://i.imgur.com/fA1Oi4p.jpg"})
v48 = Venue.create({name: "Jones Beach Theater", location: "Wantagh, NY, USA", image: "https://i.imgur.com/gzsbgJg.jpg"})
v49 = Venue.create({name: "Preservation Hall", location: "New Orleans, LA, USA", image: "https://i.imgur.com/5hnzf8H.jpg"})
v50 = Venue.create({name: "Casbah", location: "San Diego, CA, USA", image: "https://i.imgur.com/d9Uu2y7.jpg"})
v51 = Venue.create({name: "King Tuts Wah Wah Hut", location: "Glasgow, Scotland, UK", image: "https://i.imgur.com/MCHnuRw.jpg"})
v52 = Venue.create({name: "Palacio de Bellas Artes", location: "Mexico City, Mexico", image: "https://i.imgur.com/4XVx0Wo.jpg"})
v53 = Venue.create({name: "House of Blues", location: "Boston, MA, USA", image: "https://i.imgur.com/EaTJwSZ.jpg"})
# v48 = Venue.create({name: "", location: "", image: ""})




puts "---------------------- Success!!"
