Rails.application.routes.draw do
  #& Defines the root path route ("/")
  #& root "articles#index"

  ##~ FOR THE ARTIST-CONCERTS-VENUES DISPLAYS
  #& get all the artists-genres-venues-concerts-posts; to save to each state
  get '/artists', to: "artists#index"
  get '/genres', to: "genres#index"
  get '/venues', to: "venues#index"
  get '/concerts', to: "concerts#index"
  get '/posts', to: "posts#index"

  #& get info about the artist's upcoming shows
  get '/upcoming_shows', to: "artists#upcoming_shows"



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
