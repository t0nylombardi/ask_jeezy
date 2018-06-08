class CreateBibleChapters < ActiveRecord::Migration[5.2]
  def change
    create_table :bible_chapters do |t|
      t.text :chapter

      t.timestamps
    end
  end
end
