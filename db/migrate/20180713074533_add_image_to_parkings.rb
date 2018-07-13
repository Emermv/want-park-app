class AddImageToParkings < ActiveRecord::Migration[5.1]
  def change
    add_column :estacionamientos, :image, :text
  end
end
