class CreateMentorships < ActiveRecord::Migration[5.1]
  def change
    create_table :mentorships do |t|

    	t.belongs_to :mentor, through: :user, index:true
    	t.belongs_to :mentee, through: :user, index:true
    	t.string :status

    end
  end
end
