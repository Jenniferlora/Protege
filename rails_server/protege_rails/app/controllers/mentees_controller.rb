class MenteesController < ApplicationController
  # before_action :ensure_signed_in
def index
  mentees = Mentee.joins(:user)
  render json: mentees.select("users.*,mentees.*")
  end

  def show
  mentee =  Mentor.find_by(params[:user_id]).user
  render json: mentee
  end


end
