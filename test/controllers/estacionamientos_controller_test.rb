require 'test_helper'

class EstacionamientosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @estacionamiento = estacionamientos(:one)
  end

  test "should get index" do
    get estacionamientos_url
    assert_response :success
  end

  test "should get new" do
    get new_estacionamiento_url
    assert_response :success
  end

  test "should create estacionamiento" do
    assert_difference('Estacionamiento.count') do
      post estacionamientos_url, params: { estacionamiento: { altitud: @estacionamiento.altitud, descripcion: @estacionamiento.descripcion, direccion: @estacionamiento.direccion, estado: @estacionamiento.estado, id_proveedor: @estacionamiento.id_proveedor, latitud: @estacionamiento.latitud, longitud: @estacionamiento.longitud, moneda: @estacionamiento.moneda, precio: @estacionamiento.precio, tipo: @estacionamiento.tipo } }
    end

    assert_redirected_to estacionamiento_url(Estacionamiento.last)
  end

  test "should show estacionamiento" do
    get estacionamiento_url(@estacionamiento)
    assert_response :success
  end

  test "should get edit" do
    get edit_estacionamiento_url(@estacionamiento)
    assert_response :success
  end

  test "should update estacionamiento" do
    patch estacionamiento_url(@estacionamiento), params: { estacionamiento: { altitud: @estacionamiento.altitud, descripcion: @estacionamiento.descripcion, direccion: @estacionamiento.direccion, estado: @estacionamiento.estado, id_proveedor: @estacionamiento.id_proveedor, latitud: @estacionamiento.latitud, longitud: @estacionamiento.longitud, moneda: @estacionamiento.moneda, precio: @estacionamiento.precio, tipo: @estacionamiento.tipo } }
    assert_redirected_to estacionamiento_url(@estacionamiento)
  end

  test "should destroy estacionamiento" do
    assert_difference('Estacionamiento.count', -1) do
      delete estacionamiento_url(@estacionamiento)
    end

    assert_redirected_to estacionamientos_url
  end
end
