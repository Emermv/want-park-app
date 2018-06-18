class HomeController < ApplicationController
	def index
		if params[:'sign-up']=='1'
			@show_modal=true
		end
	end 
end
