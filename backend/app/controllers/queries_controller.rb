class QueriesController < ApplicationController

    def index
        queries = Query.all 
        render json: queries
    end

    def new
        query = Query.new
    end

    def create
        # query = Query.create(query: params[:base])
        # params[:rates].each do |currency_ID, current_rate|
        #     Rate.create(query_id: query.id)
        # end
        
        query = Query.create(query_params)
        render json: query
    end

private

def query_params
    # params.require(:query)
    params.require(:query).permit(:base_currency)
end

end
