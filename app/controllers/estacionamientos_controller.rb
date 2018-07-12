class EstacionamientosController < ApplicationController
  before_action :set_estacionamiento, only: [:show, :edit, :update, :destroy]

  # GET /estacionamientos
  # GET /estacionamientos.json
  def index
    @estacionamientos = Estacionamiento.all
  end

  # GET /estacionamientos/1
  # GET /estacionamientos/1.json
  def show
  end

  # GET /estacionamientos/new
  def new
    @estacionamiento = Estacionamiento.new
  end

  # GET /estacionamientos/1/edit
  def edit
  end

  # POST /estacionamientos
  # POST /estacionamientos.json
  def create
    params[:estacionamiento][:id_proveedor]=session['user']['id']
    @estacionamiento = Estacionamiento.new(estacionamiento_params)
  
    respond_to do |format|
      if @estacionamiento.save
        format.html { redirect_to @estacionamiento, notice: 'Estacionamiento was successfully created.' }
        format.json { render :show, status: :created, location: @estacionamiento }
      else
        format.html { render :new }
        format.json { render json: @estacionamiento.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /estacionamientos/1
  # PATCH/PUT /estacionamientos/1.json
  def update
    respond_to do |format|
      if @estacionamiento.update(estacionamiento_params)
        format.html { redirect_to @estacionamiento, notice: 'Estacionamiento was successfully updated.' }
        format.json { render :show, status: :ok, location: @estacionamiento }
      else
        format.html { render :edit }
        format.json { render json: @estacionamiento.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /estacionamientos/1
  # DELETE /estacionamientos/1.json
  def destroy
    @estacionamiento.destroy
    respond_to do |format|
      format.html { redirect_to estacionamientos_url, notice: 'Estacionamiento was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_estacionamiento
      @estacionamiento = Estacionamiento.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def estacionamiento_params
      params.require(:estacionamiento).permit(:descripcion, :tipo, :id_proveedor, :direccion, :latitud, :longitud, :altitud, :estado, :precio, :moneda)
    end
end
