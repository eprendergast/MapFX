class CountriesController < ApplicationController

    def index
        @countries = Country.all 
        render json: @countries, only: [:country_code, :country_name]
    end

end
