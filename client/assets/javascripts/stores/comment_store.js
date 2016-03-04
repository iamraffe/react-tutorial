import AppDispatcher from '../app_dispatcher';
import Constants from '../constants';
import { EventEmitter } from 'events';
import _ from 'lodash';

class CommentStore extends EventEmitter {
  constructor() {
    super()
    this._comments = []

    AppDispatcher.register((payload) => {
      switch(payload.actionType) {
        case Constants.ADD_COMMENT:
          this.addComment(payload.comment)
          this.emitChange()
          break;
        case Constants.SET_COMMENTS:
          this.setComments(payload.comment)
          this.emitChange()
          break;
        case Constants.UPVOTE_COMMENT:
          // console.log(payload.comment)
          this.upvote(payload.comment)
          this.emitChange()
          break;
        case Constants.EDIT_COMMENT:
          // console.log(payload.comment)
          this.editComment(payload.comment)
          this.emitChange()
          break;
        case Constants.DELETE_COMMENT:
          // console.log(payload.comment)
          this.deleteComment(payload.comment)
          this.emitChange()
          break;
        default:
          // NO-OP
      }
    });
  }

  addComment(comment) {
    this._comments[comment.id || this._comments.length] = comment;
    // console.log(this._comments)
  }

  setComments(comments){
    comments.forEach(comment => {
      this.addComment(comment)
    })
  }

  upvote(comment){
    this._comments[comment.id].rank++
  }

  editComment(comment){
    this._comments[comment.id] = comment
  }

  deleteComment(comment){
    delete this._comments[comment.id]
  }

  comments(parentId) {
    return _.chain(this._comments.filter(c => {return c && c.parent_id === parentId}))
            .sortBy('rank')
            .reverse()
            .value()
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
}

export default CommentStore;
