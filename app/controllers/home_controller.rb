class HomeController < ApplicationController
	def index
		@new_user={}
		if params[:'sign-up']=='1'
			@show_modal=true
		end
	end 
	def hello
		puts "hi ajax XD"
	end

end
