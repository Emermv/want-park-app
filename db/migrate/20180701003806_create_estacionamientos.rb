class CreateEstacionamientos < ActiveRecord::Migration[5.1]
  def change
    create_table :estacionamientos do |t|
      t.text :descripcion
      t.integer :tipo
      t.integer :id_proveedor
      t.string :direccion
      t.string :latitud
      t.string :longitud
      t.string :altitud
      t.boolean :estado
      t.decimal :precio
      t.string :moneda

      t.timestamps
    end
  end
end
