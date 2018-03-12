class MentorshipsController < ApplicationController
  # before_action :ensure_signed_in, :except=>[:new, :create]
def index
    mentorships = Mentorship.all
    render json: mentorships
  end

  def show
    mentorship = Mentorship.find(params[:id])
    render json: mentorship
  end

  def create
    mentorship = Mentor.create!(mentorship_params)
    render json: mentorship
  end

  def update
    mentorship = Mentorship.find(params[:id])
    mentorship.update!(mentorship_params)
    render json: mentorship
  end

  def destroy
    mentorship = Mentorship.find(params[:id])
    Mentor.destroy
    render plain: "mentorship deleted"
  end

  private

  def mentorship_params
    params.require(:mentorship).permit(:mentor_id, :mentee_id, :status)    
  end

end
