class CreateUsuarios < ActiveRecord::Migration[5.1]
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :apellidos
      t.integer :edad
      t.string :direccion
      t.string :genero
      t.string :usuario
      t.string :contrasenia
      t.boolean :estado
      t.integer :tipo_usuario

      t.timestamps
    end
  end
end
