class RatesController < ApplicationController

    def index
        rates = Rate.all 
        render json: rates
    end

    def new
        rate = Rate.new
    end

    def create
        Rate.create(country_code: country_code, current_rate: current_rate, query_id: query_id)
    end

end
