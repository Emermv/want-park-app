Rails.application.routes.draw do
  resources :users
post '/main/index'
get '/main/index'
get '/main/history'
get '/main/settings'
get '/main/parking'
get "/sign-up/index"
get '/login/index'
post '/login/autenticate'

root 'home#index'
end
