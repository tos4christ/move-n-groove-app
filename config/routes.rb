Rails.application.routes.draw do
  devise_for :users

  root to: "site#home"
  resources :activities
  get '/home', to: 'site#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
