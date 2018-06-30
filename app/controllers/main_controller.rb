class MainController < ApplicationController
	layout 'main-app'
	def index

	end
	def history
	end
	def parking
	end
	def settings
		@user=User.find(session[:user]['id'])
	end
end
