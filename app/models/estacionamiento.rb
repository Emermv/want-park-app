class Estacionamiento < ApplicationRecord
		validates :descripcion, :presence => { message: "El campo nombre es requerido" }
    validates :direccion, :presence => { message: "La dirección es un campo obligatorio" }

end
