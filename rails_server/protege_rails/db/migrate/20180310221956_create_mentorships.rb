class CreateMentorships < ActiveRecord::Migration[5.1]
  def change
    create_table :mentorships do |t|

    	t.belongs_to :users, index:true
    	t.belongs_to :mentors, through: :users, index:true
    	t.belongs_to :mentees, through: :users, index:true
    	t.string :status

    end
  end
end
