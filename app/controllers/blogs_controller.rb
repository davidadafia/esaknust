class BlogsController < ApplicationController
  def index
    @blogs = Blog.all
  end

  def show
    @blog = Blog.find(params[:id])
    @blogs = Blog.all
  end

  def create
    Blog.create(params[:blog])
  end
  
  def update
    blog = current_account.blogs.find(params[:id])
	  blog.update!(blog_params)
	  redirect_to blog
  end
  
private
  def blog_params
    params.require(:blog).permit(:title, :body, :id, :writer, :blopic)
  end
end

