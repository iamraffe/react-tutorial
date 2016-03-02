class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author
      t.text :body
      t.integer :rank, default: 0
      t.belongs_to :restaurant
      t.timestamps null: false
    end
  end
end
