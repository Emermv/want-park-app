Rails.application.routes.draw do
get '/main/index'
post '/main/index'
get "/sign-up/index"
get '/login/index'
post '/login/autenticate'
root 'home#index'
end
