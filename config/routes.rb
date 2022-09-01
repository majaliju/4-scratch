Rails.application.routes.draw do

  ## TODO
  ## remove the excess rails routes via this video https://youtu.be/IDsYWrsmO9g?t=182
  ## if that doesn't work, then undo the scaffolding >> copy the migration files, & app files, to a new folder then rollback all migrations and undo the scaffolding. then just replace the files back in, after doing new migrations/controllers etc
  

  # to login our user
  post "/login", to: "sessions#create"
  # to keep the user logged in
  get "/me", to: "users#show"
  # to log the user out
  delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"

    # route to test your configuration
  get '/hello', to: 'application#hello_world'

  # route to show my sessions param basically
  # shows session_id and that's it basically
  get '/sessions', to: 'application#show_session'

  # configured the root route to display cookies & session info
  get '/', to: 'application#index'
end