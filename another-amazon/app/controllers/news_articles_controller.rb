class NewsArticlesController < ApplicationController
  before_action :find_news_article, only: [:show, :destroy, :edit, :update]

  def new
    @news_article = NewsArticle.new
  end

  def create
    @news_article = NewsArticle.new news_article_params
    if @news_article.save
      flash[:notice] = "Article Created!"
      redirect_to @news_article
    else
      render :new
    end
  end

  def show
  end

  def destroy
    @news_article.destroy
    flash[:alert] = "Article Deleted!"
    redirect_to news_articles_path
  end

  def index
    @news_articles = NewsArticle.all.order(created_at: :desc)
  end

  def edit
  end

  def update
    if @news_article.update news_article_params
      flash[:notice] = "Article Updated!"
      redirect_to @news_article
    else
      flash[:alert] = "Something went wrong, see errors below."
      render :edit
    end
  end

  private

  def news_article_params
    params.require(:news_article).permit(:title, :description)
  end

  def find_news_article
    @news_article = NewsArticle.find params[:id]
  end
end
