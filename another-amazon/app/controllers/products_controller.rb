class ProductsController < ApplicationController

    before_action :authenticate_user!, except: [:show, :index]
    before_action :find_product, only: [:show, :destroy, :edit, :update]
    before_action :authorize!, only: [:edit, :update, :destroy]

    def new
        @product = Product.new
    end

    def create
        @product = Product.new product_params
        @product.user = current_user
        if @product.save
            redirect_to product_path(@product.id)
        else
            render :new
        end
    end

    def show
        @review = Review.new
        @reviews = @product.reviews.order(created_at: :desc)
    end

    def index
        @products = Product.all.order(created_at: :DESC)
    end

    def destroy
        @product.destroy
        redirect_to products_path
    end

    def edit
    end

    def update
        if @product.update product_params
            redirect_to product_path(@product.id)
        else
            render :edit
        end
    end

    private

    def product_params
        params.require(:product).permit(:title, :description, :price)
    end

    def find_product
        @product = Product.find(params[:id])
    end

    def authorize!
        redirect_to root_path, alert: "Access Denied" unless can? :crud, @product
    end

end
