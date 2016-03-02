class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params.merge(restaurant_id: params[:restaurant_id]))
  end

  private
    def comment_params
      params.required(:comment).permit(:body, :author)
    end
end
