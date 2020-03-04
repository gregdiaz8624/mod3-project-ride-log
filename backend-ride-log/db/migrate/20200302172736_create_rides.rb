class CreateRides < ActiveRecord::Migration[6.0]
  def change
    create_table :rides do |t|
      t.string :name
      t.float :distance
      t.string :image_url
      t.integer :rating
      t.string :time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
