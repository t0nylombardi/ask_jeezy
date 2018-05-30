class CreateBibleChapters < ActiveRecord::Migration
  def change
    create_table :bible_chapters do |t|
      t.text :chapter

      t.timestamps
    end
  end
end
