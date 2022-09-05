Rails.application.routes.draw do

  ## THE LOGIN/LOGOUT ROUTES

  # to login our user
  post "/login", to: "sessions#create"
  # to keep the user logged in
  get "/me", to: "users#show"
  # to log the user out
  delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"


  # route to show my sessions param basically
  # shows session_id and that's it basically
  get '/show_session', to: 'application#show_session'

  # configured the root route to display cookies & session info
  get '/cookies', to: 'application#show_cookies'

end