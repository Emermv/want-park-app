json.extract! estacionamiento, :id, :descripcion, :tipo, :id_proveedor, :direccion, :latitud, :longitud, :altitud, :estado, :precio, :moneda, :created_at, :updated_at
json.url estacionamiento_url(estacionamiento, format: :json)
