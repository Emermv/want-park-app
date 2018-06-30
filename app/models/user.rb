class User < ApplicationRecord
	validates :nombre, :presence => { message: "El campo nombre es requerido" },
                    :length => { :minimum => 2, :too_short => "El campo nombre debe ser mayor a 2" }
    validates :contrasenia, :presence => { message: "La contraseña es requerido" },
                    :length => { :minimum => 6, :too_short => "La contraseña debe ser mayor a 6" }

   
end
