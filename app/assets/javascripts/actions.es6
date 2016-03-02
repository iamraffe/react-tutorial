import AppDispatcher from './app_dispatcher';
import Constants from './constants';


class Actions {
  addComment(params){
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }
}

export default Actions
