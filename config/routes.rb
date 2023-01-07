Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :tags
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
  }
 
end
