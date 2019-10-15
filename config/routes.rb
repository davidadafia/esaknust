Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config

  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  get 'users/index'

  get 'users/show' 

  get 'resources/show'

  get 'outlines/show'

  get 'years/index'

  get 'years/show'

  get 'classrooms/index'

  get 'classrooms/show'

  get 'classrooms/mates'

  get 'homes/index'


  
  mount Commontator::Engine => '/commontator'
  mount LetsEncrypt::Engine => '/.well-known'

  mathjax 'mathjax'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
   root 'homes#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  resources :questions
  resources :years
  resources :classrooms
  resources :blogs
  resources :resources
  resources :outlines
  resources :users
  resources :parts

  resources :years do
    resources :classrooms, :title, :id
  end

  resources :classrooms do
    resources :title, :id, :body, :year_id
  end

  resources :blogs do
    resources :title, :id, :body, :blopic, :writer
  end

  resources :resources do
      resources :title, :id, :body, :classrooms_id
  end

  resources :outlines do
      resources :title, :id, :body, :classrooms_id
  end
  resources :questions do
      resources :title, :id, :body, :classrooms_id
  end
  resources :parts do
      resources :title, :id, :body, :questions_id
  end
  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end


  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
  ActiveAdmin.routes(self)
end
