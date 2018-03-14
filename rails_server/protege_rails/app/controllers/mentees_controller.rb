class MenteesController < ApplicationController
  # before_action :ensure_signed_in
def index
  mentees = Mentee.joins(:user)
  render json: mentors.select("users.*,mentors.*")
  end

  def show
  mentor =  Mentor.find_by(params[:user_id]).user
  render json: mentor
  end

  def create
    mentee = Mentee.create!(mentor_params)
    render json: mentee
  end

  def update
    mentee = Mentee.find(params[:id])
    mentee.update!(mentee_params)
    render json: mentee
  end

  def destroy
    mentee = Mentee.find(params[:id])
    Mentee.destroy
    render plain: "mentee deleted"
  end

  private

  def mentor_params
    params.require(:mentee).permit(:user_name, :password, :name, :location, :school, :tags, :work, :image_url)    
  end

end
