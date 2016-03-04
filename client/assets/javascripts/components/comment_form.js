import React from 'react';
import _ from 'lodash';

class CommentForm extends React.Component{
  constructor(props){
    super()
    this.defaultState = { body: props.body, author: props.author, hasEditedBody: false, hasEditedAuthor: false}
    this.state = this.defaultState
  }

  static get contextTypes(){
    return{
      actions: React.PropTypes.object.isRequired
    }
  }

  static get PropTypes(){
    return {
      onCommentSubmitted: React.PropTypes.func,
      onCommentEdited: React.PropTypes.func,
      isReplying: React.PropTypes.bool,
      isEditing: React.PropTypes.bool,
      parent_id: React.PropTypes.number
    }
  }

  onFieldChange(event){
    let prop = {}
    prop[event.target.name] = event.target.value
    event.target.name === "body" ? prop["hasEditedBody"] = true : prop["hasEditedAuthor"] = true
    this.setState(prop)
  }

  submitComment(event){
    event.preventDefault()
    this.context.actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id }))
    this.setState({ body: "", author: "", hasEditedBody: false, hasEditedAuthor: false})
    if(this.props.onCommentSubmitted){
      this.props.onCommentSubmitted()
    }
  }

  editComment(event){
    event.preventDefault()
    this.state.hasEditedAuthor ? this.state.author = this.state.author : this.state.author = this.props.author
    this.state.hasEditedBody ? this.state.body = this.state.body : this.state.body = this.props.body
    console.log(this.state)
    this.context.actions.editComment(_.merge(this.state, { id: this.props.parent_id }))
    this.setState(this.defaultState)
    if(this.props.onCommentEdited){
      this.props.onCommentEdited()
    }
  }

  render(){
    const authorText = !this.state.hasEditedAuthor && this.props.isEditing ? this.props.author : this.state.author
    const bodyText = !this.state.hasEditedBody && this.props.isEditing ? this.props.body : this.state.body
    return  <div>
              <form className={this.props.isReplying || this.props.isEditing ? '' : 'hide'}>
                <label>Author</label>
                <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={authorText} placeholder={authorText} />
                <label>Comment</label>
                <textarea name="body"  onChange={this.onFieldChange.bind(this)} value={bodyText} placeholder={bodyText} />
                <button className={this.props.isReplying ? 'button hollow' : 'button hollow hide'} onClick={this.submitComment.bind(this)} type="submit">Submit</button>
                <button className={this.props.isEditing ? 'button hollow' : 'button hollow hide'} onClick={this.editComment.bind(this)} type="submit">Update</button>
              </form>
            </div>;
  }

}

export default CommentForm;
