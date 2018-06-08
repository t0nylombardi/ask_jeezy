class CreateBibles < ActiveRecord::Migration[5.2]
  def change
    create_table :bibles do |t|
      t.integer :book_id
      t.integer :chapter_no
      t.integer :verse_no
      t.text :verse_text

      t.timestamps
    end
  end
end
