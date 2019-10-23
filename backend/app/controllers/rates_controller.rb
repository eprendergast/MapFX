class RatesController < ApplicationController

    def index
        rates = Rate.all 
        render json: rates
    end

    def new
        rate = Rate.new
    end

    def create
        # byebug
        rate = Rate.create(rate_params)
        render json: rate
    end

    private
    def rate_params
        params.require(:rate).permit(:country_code, :current_rate, :query_id)
    end
end
