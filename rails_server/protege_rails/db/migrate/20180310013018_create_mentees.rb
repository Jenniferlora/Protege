class CreateMentees < ActiveRecord::Migration[5.1]
  def change
    create_table :mentees do |t|

    	t.belongs_to :user, index:true
    	
    end
  end
end
