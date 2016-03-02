import AppDispatcher from './app_dispatcher';
import Constants from './constants';
import Api from './api';

class Actions {
  static addComment(params){
    Api.post('/restaurants/1/comments',{
      comment: params
    }).then( response => {
      return response.json()
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: comment
      });
    })
  }

  static setComments(params){
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comment: params
    });
  }

  static upvoteComment(comment){
    Api.put(`/restaurants/1/comments/${comment.id}/upvote`).then( response => {
      return response.json()
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.UPVOTE_COMMENT,
        comment: comment
      });
    })
  }
}

export default Actions;
