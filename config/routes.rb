Rails.application.routes.draw do

  ##~ FOR THE ARTIST-CONCERTS-VENUES DISPLAYS
  #& to get a master list of artists (with each one's genre)
  get 'artists', to: "artists#index"


  #& Defines the root path route ("/")
  #& root "articles#index"

  ##~ THE LOGIN/LOGOUT ROUTES
  #& to create a new user outright
  post "/new_user", to: "users#create"
  #& to login our user
  post "/login", to: "sessions#create"
  #& to keep the user logged in
  get "/me", to: "users#show"
  #& to log the user out
  delete "/logout", to: "sessions#destroy"

  #& show all the users
  get "/users", to: "users#index"

  ##~ SESSION & COOKIES INFO
  #& shows session_id and sessions info
  get "/show_session", to: "application#show_session"
  #& displays cookies
  get "/cookies", to: "application#show_cookies"
end
