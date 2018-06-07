class FrontController < ApplicationController
  before_action :set_front, only: [:show, :edit, :update, :destroy]

  # GET /controllers
  # GET /controllers.json
  def index
    rand_num = Random.rand(1..Bible.count)
    row = Bible.where(id: rand_num).first
    render json: return_row(row)
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_controller
      @controller = Controller.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def controller_params
      params.require(:controller).permit(:front)
    end

    def return_row(row)
      {
        verse_text: row.verse_text.sub(/\A"(.*)"\z/, '\\1')
      }
    end
end
