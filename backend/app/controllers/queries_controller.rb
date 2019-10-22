class QueriesController < ApplicationController

    def index
        queries = Query.all 
        render json: queries
    end

    def new
        query = Query.new
    end

    def create
        Query.create(base_currency: base_currency)
    end

end
