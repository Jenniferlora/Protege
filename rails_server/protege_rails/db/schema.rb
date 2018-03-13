# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180312202533) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mentees", force: :cascade do |t|
    t.bigint "users_id"
    t.index ["users_id"], name: "index_mentees_on_users_id"
  end

  create_table "mentors", force: :cascade do |t|
    t.bigint "users_id"
    t.index ["users_id"], name: "index_mentors_on_users_id"
  end

  create_table "mentorships", force: :cascade do |t|
    t.bigint "users_id"
    t.bigint "mentors_id"
    t.bigint "mentees_id"
    t.string "status"
    t.index ["mentees_id"], name: "index_mentorships_on_mentees_id"
    t.index ["mentors_id"], name: "index_mentorships_on_mentors_id"
    t.index ["users_id"], name: "index_mentorships_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "full_name"
    t.string "occupation"
    t.string "location"
    t.string "school"
    t.string "tags"
    t.string "work"
    t.string "image_url"
    t.string "category"
  end

end
