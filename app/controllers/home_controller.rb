class HomeController < ApplicationController
	def index
		    @user = User.new
		if params[:'sign-up']=='1'
			@show_modal=true
		end
	end 

end
