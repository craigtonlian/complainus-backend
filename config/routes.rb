Rails.application.routes.draw do
  get 'private/test'
  get '/current_user', to: "current_user#index"
  resources :comments
  resources :posts
  resources :tags
  devise_for :users,
  controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
  }
 
end
