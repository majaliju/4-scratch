class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.boolean :solo_act

      t.timestamps
    end
  end
end
