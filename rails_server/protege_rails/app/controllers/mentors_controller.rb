class MentorsController < ApplicationController
  # before_action :ensure_signed_in

def index
	mentors = Mentor.joins(:user)
  render json: mentors.select("users.*,mentors.*")
  	
  end
		# mentors =  Mentor.find_by(params[:user_id]).user

 def show
 	mentor =  Mentor.find_by(params[:user_id]).user
 	render json: mentor
	end


end
