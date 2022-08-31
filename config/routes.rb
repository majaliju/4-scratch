Rails.application.routes.draw do
  resources :users
  resources :genres
  resources :artists
  resources :posts
  resources :venues
  resources :tickets
  resources :concerts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # route to test your configuration
  get '/hello', to: 'application#hello_world'

  # route to show my sessions param basically
  # shows session_id and that's it basically
  get '/sessions', to: 'application#show_session'
end