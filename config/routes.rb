Rails.application.routes.draw do

  #& Defines the root path route ("/")
  #& root "articles#index"

  ##~ THE LOGIN/LOGOUT ROUTES
  #& to create a new user outright
  post "/new_user", to: "users#create"
  #& to login our user
  post '/login', to: "session#create"
  #& to keep the user logged in
  get "/me", to: "users#show"
  #& to log the user out
  delete "/logout", to: "session#destroy"

  #& show all the users
  get "/users", to: "users#index"

  ##~ SESSION & COOKIES INFO
  #& shows session_id and sessions info
  get "/show_session", to: "application#show_session"
  #& displays cookies
  get "/cookies", to: "application#show_cookies"
end
