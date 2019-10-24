class CountriesController < ApplicationController

    def index
        @countries = Country.all 
        render json: @countries, only: [:code, :name, :currency]
    end

    def search_by_currency
        query = params["query"]
        @country = Country.where(currency: query)
        render json: @country
    end

    def search_by_country_code
        query = params["query"]
        @country = Country.where(code: query)
        render json: @country
    end

end
