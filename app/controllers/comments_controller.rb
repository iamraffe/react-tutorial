class CommentsController < ApplicationController
  def index
    @comments = Comment.where(restaurant_id: params[:restaurant_id])
  end

  def create
    @comment = Comment.create(comment_params.merge(restaurant_id: params[:restaurant_id]))
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update_attributes(comment_params)
    @comment
  end

  def destroy
    @comment = Comment.find(params[:id])
    Comment.destroy(params[:id])
    @comment
  end

  private
    def comment_params
      params.required(:comment).permit(:body)
    end
end
