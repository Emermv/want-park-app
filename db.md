rails g model usuario nombre:string apellidos:string edad:integer direccion:string genero:string usuario:string contrasenia:string estado:boolean tipo_usuario:integer

rails g scaffold user nombre:string apellidos:string edad:integer direccion:string genero:string usuario:string contrasenia:string estado:boolean tipo_usuario:integer




rails g scaffold estacionamiento descripcion:text tipo:integer id_proveedor:integer direccion:string latitud:string longitud:string altitud:string estado:boolean precio:decimal moneda:string