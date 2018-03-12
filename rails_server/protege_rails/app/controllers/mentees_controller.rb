class MenteesController < ApplicationController
  # before_action :ensure_signed_in
def index
    mentees = Mentee.all
    render json: mentees
  end

  def show
    mentees = Mentee.find(params[:id])
    render json: mentees
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
