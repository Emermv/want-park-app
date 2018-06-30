class Usuario < ApplicationRecord
	validates :nombre, :presence => { message: "es requerido" },
                    :length => { :minimum => 5, :too_short => "debe ser mayor a 5" }
end
