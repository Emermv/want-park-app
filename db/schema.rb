# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180701003806) do

  create_table "estacionamientos", force: :cascade do |t|
    t.text "descripcion"
    t.integer "tipo"
    t.integer "id_proveedor"
    t.string "direccion"
    t.string "latitud"
    t.string "longitud"
    t.string "altitud"
    t.boolean "estado"
    t.decimal "precio"
    t.string "moneda"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tests", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "nombre"
    t.string "apellidos"
    t.integer "edad"
    t.string "direccion"
    t.string "genero"
    t.string "usuario"
    t.string "contrasenia"
    t.boolean "estado"
    t.integer "tipo_usuario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "nombre"
    t.string "apellidos"
    t.integer "edad"
    t.string "direccion"
    t.string "genero"
    t.string "usuario"
    t.string "contrasenia"
    t.boolean "estado"
    t.integer "tipo_usuario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
