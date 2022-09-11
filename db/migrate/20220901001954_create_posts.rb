class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :body
      t.boolean :for_sale
      t.integer :how_many_tickets
      t.integer :concert_id
      t.integer :user_id

      t.timestamps
    end
  end
end
