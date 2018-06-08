# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# t.integer "book_id"
# t.integer "chapter_no"
# t.integer "verse_no"
# t.text "verse_text"

require 'csv' 

csv_text = File.read('db/bible.csv')
csv = CSV.parse(csv_text, headers: true)

csv.each do |row|
  Bible.create!({
    chapter_no: row['chapter_no'],
    verse_no: row['verse_no'],
    verse_text: row['verse_text']
  })
  puts "Entered row# #{row['id']}"
end