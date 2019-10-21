class CreateRates < ActiveRecord::Migration[6.0]
  def change
    create_table :rates do |t|
      t.integer :query_id
      t.string :country_code
      t.decimal :current_rate
      t.timestamps
    end
  end
end
