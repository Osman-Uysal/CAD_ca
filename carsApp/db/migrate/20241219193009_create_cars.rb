# frozen_string_literal: true

# This is the top level comment
class CreateCars < ActiveRecord::Migration[8.0]
  def change
    create_table :cars do |t|
      t.string :car
      t.string :details

      t.timestamps
    end
  end
end
