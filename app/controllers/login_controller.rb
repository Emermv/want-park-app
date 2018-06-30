class LoginController<ApplicationController
	def index
		@user=User.new
	end
	def autenticate
		@fields=[]
		@response={state:false,fields:{}}
		@ok=0
	if(params[:user]!=nil && params[:user].length>0)
			@ok=@ok+1
		else
			@fields.push('user')
        end
        if(params[:password]!=nil && params[:password].length>0)
			@ok=@ok+1
		else
			@fields.push('password')
        end
        	
          @response['fields']=@fields
		if(@ok==2)

			@user = User.where("usuario='#{params[:user]}' and contrasenia='#{params[:password]}'")
		
		if(@user!=nil and @user[0]!=nil)
			session[:user]=@user[0]
			@response['data']=@user[0].as_json

			@response['state']=true
		end
		end

        render json: JSON.pretty_generate(@response)
		
	end
end