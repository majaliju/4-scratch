class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.integer :price
      t.integer :how_many_left
      t.boolean :is_vip
      t.integer :concert_id

      t.timestamps
    end
  end
end
