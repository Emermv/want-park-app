json.extract! user, :id, :nombre, :apellidos, :edad, :direccion, :genero, :usuario, :contrasenia, :estado, :tipo_usuario, :created_at, :updated_at
json.url user_url(user, format: :json)
