class CreateQueries < ActiveRecord::Migration[6.0]
  def change
    create_table :queries do |t|
      t.string :base_currency
      t.timestamps
    end
  end
end
