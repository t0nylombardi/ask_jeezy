class FrontController < ApplicationController

  # GET /controllers
  # GET /controllers.json
  def index
    row = Bible.where(id: Random.rand(1..Bible.count)).first
    render json: return_row(row)
  end

  private

    def return_row(row)
      {
        verse_text: row.verse_text.sub(/\A"(.*)"\z/, '\\1')
      }
    end
end
