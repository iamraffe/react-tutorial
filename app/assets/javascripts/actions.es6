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
}

export default Actions;
