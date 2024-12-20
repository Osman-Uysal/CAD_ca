# frozen_string_literal: true

class CreateCars < ActiveRecord::Migration[8.0]
  def change
    create_table :cars do |t|
      t.string :car
      t.string :details

      t.timestamps
    end
  end
end
