class MentorsController < ApplicationController
  # before_action :ensure_signed_in
def index
    mentors = Mentor.all
    render json: mentors
  end

  def show
    mentor = Mentor.find(params[:id])
    render json: mentor
  end

  def create
    mentor = Mentor.create!(mentor_params)
    render json: mentor
  end

  def update
    mentor = Mentor.find(params[:id])
    mentor.update!(mentor_params)
    render json: mentor
  end

  def destroy
    mentor = Mentor.find(params[:id])
    Mentor.destroy
    render plain: "song deleted"
  end

  private

  def mentor_params
    params.require(:mentor).permit(:user_name, :password, :name, :location, :school, :tags, :work, :image_url)    
  end
end
