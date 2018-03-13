# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create("username": "jenny", "password_digest": "password", "full_name": "jenny", "occupation": "tech", "location": "NYC", "tags": "fashion","work": "Bloomies", "image_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10372525_915792988303_8997508953943344101_n.jpg?oh=73cdcfa1a6f79f84e2bbb4633f3ccf17&oe=5B44B131", "category": "mentor")
User.create("username": "roxy", "password_digest": "password", "full_name": "roxy", "location": "NYC", "tags": "fashion","work": "Bloomies", "image_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10372525_915792988303_8997508953943344101_n.jpg?oh=73cdcfa1a6f79f84e2bbb4633f3ccf17&oe=5B44B131", "category": "mentee")
User.create("username": "jorge", "password_digest": "password", "full_name": "jorge", "location": "NYC", "tags": "fashion","work": "Bloomies", "image_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10372525_915792988303_8997508953943344101_n.jpg?oh=73cdcfa1a6f79f84e2bbb4633f3ccf17&oe=5B44B131", "category": "mentor")
