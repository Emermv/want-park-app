class LoginController<ApplicationController
	def index
		@post={}
	end
	def autenticate
		redirect_to :action=>:index,:controller=>:main
	end
end