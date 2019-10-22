class CountriesController < ApplicationController

    def index
        countries = Country.all 
        render json: countries
    end

    def new
        country = Country.new
    end

    def create
        Country.create(country_code: country_code, country_name: country_name)
    end

end
