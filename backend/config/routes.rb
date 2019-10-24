Rails.application.routes.draw do
  resources :countries
  resources :rates
  resources :queries

  get "/countries/search_by_currency/:query", to: "countries#search_by_currency"
  get "/countries/search_by_country_code/:query", to: "countries#search_by_country_code"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
