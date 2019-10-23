class AddRatesToQueries < ActiveRecord::Migration[6.0]
  def change
    add_column :queries, :rates, :string
  end
end
