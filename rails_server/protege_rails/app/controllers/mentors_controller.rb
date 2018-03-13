class MentorsController < ApplicationController
  # before_action :ensure_signed_in

def index
    mentors = Mentor.all
    render json: mentors
  end

  def show
    mentor = Mentor.find(params[:users_id])
    render json: mentor
  end

end
