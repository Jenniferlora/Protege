class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|

    t.string :username
		t.string :password_digest
		t.string :full_name
		t.string :occupation 
		t.string :location
		t.string :school
		t.string :tags
		t.string :work
		t.string :image_url
		t.string :category

    end
  end
end
