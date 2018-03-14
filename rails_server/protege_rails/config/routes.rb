Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :mentees
resources :mentors
resources :mentorships
resources :users

get 'isLoggedIn', :to => 'users#is_logged_in'
post 'users/login', :to => 'users#login'
get 'mentors-info', :to => 'mentors#get_mentors_info'
end
