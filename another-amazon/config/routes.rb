Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: "products#index", as: :root
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :products do
    resources :reviews, shallow: true, only: [:create, :destroy]
  end
end
