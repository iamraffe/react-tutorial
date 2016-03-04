import AppDispatcher from './app_dispatcher';
import Constants from './constants';
import Api from './api';
import _ from 'lodash';

class Actions {
  constructor(restaurantId){
    this.restaurantId = restaurantId
    this.watchInterval = setInterval(this.watch.bind(this), 1000);
  }

  addComment(params){
    Api.post(`/restaurants/${this.restaurantId}/comments`,{
      comment: params
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: comment
      });
    })
  }

  setComments(params){
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comment: params
    });
  }

  upvoteComment(comment){
    Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}/upvote`).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.UPVOTE_COMMENT,
        comment: comment
      });
    })
  }

  editComment(comment){
    Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}`, {
      comment: comment
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.EDIT_COMMENT,
        comment: comment
      });
    })
  }

  deleteComment(comment){
    Api.delete(`/restaurants/${this.restaurantId}/comments/${comment.id}`).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.DELETE_COMMENT,
        comment: comment
      });
    })
  }

  watch(){
    Api.get(`/restaurants/${this.restaurantId}/comments`).then(comments => {
      this.setComments(comments)
    });
  }
}

export default Actions;
