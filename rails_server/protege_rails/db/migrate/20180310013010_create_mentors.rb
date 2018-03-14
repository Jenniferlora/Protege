class CreateMentors < ActiveRecord::Migration[5.1]
  def change
    create_table :mentors do |t|

    	t.belongs_to :user, index:true

    end
  end
end
