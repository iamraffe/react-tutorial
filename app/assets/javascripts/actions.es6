import AppDispatcher from './app_dispatcher';
import Constants from './constants';

class Actions {
  static addComment(params){
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }

  static setComments(params){
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comment: params
    });
  }
}

export default Actions;
