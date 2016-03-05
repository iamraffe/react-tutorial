import CommentForm from "../components/comment_form";
import CommentList from "../components/comment_list";
import React from 'react';

class Comment extends React.Component {
  constructor(props){
    super()
    this.defaultState = {id: props.id, isEditing: false, body: props.body, author: props.author}
    this.state = this.defaultState
    // console.log(props)
    // console.log(this.state)
  }

  static get contextTypes(){
    return{
      actions: React.PropTypes.object.isRequired
    }
  }

  static get propTypes() {
    return{
      id: React.PropTypes.number,
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      rank: React.PropTypes.number,
    }
  }

  // onToggleReply(){
  //   this.setState({isReplying: !this.state.isReplying, isEditing: false, body: "", author: ""})
  // }

  // onCommentSubmitted(event){
  //   this.setState({isReplying: false})
  // }

  // onUpvote(){
  //   this.context.actions.upvoteComment(this.props)
  // }

  onCommentDeleted(){
    this.context.actions.deleteComment(this.props)
  }

  // onToggleEdit(){
  //   this.setState({isEditing: !this.state.isEditing, isReplying: false, body: this.props.body, author: this.props.author})
  // }

  onCommentEdited(event){
    this.setState({isEditing: false})
    // console.log(this.state)
    this.context.actions.editComment(this.state)
  }

  onToggleEdit(event){
    this.setState({isEditing: true});
  }

  onFieldChange(event){
    // console.log(this.state)
    let prop = {}
    prop[event.target.name] = event.target.value
    this.setState(prop)
    // this.setState({body: event.target.value})
    //  if(event.keyCode === 13) {
    //    this.onCommentEdited(event)
    //  } else if(event.keyCode === 27) {
    //    this.setState({isEditing: false});
    //  }
  }

  onKeyDown(event){
     if(event.keyCode === 13) {
       this.onCommentEdited(event)
     } else if(event.keyCode === 27) {
       this.setState(this.defaultState);
     }
  }

  _renderElement(){
    if(this.state.isEditing) {
      return(
        <li className="comment row collapse">
          <article>
          <input
            type="text"
            name="body"
            onChange={this.onFieldChange.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)}
            onBlur={this.onCommentEdited.bind(this)}
            defaultValue={this.props.body}
            ref="textField" />
          </article>
        </li>
      );
    }
    else {
      return(
        <li className="comment row collapse">
          <article>
            <button className="button alert tiny hollow float-right" onClick={this.onCommentDeleted.bind(this)}><span className="fa fa-times"></span></button>
            <p onDoubleClick={this.onToggleEdit.bind(this)}>
              {this.props.body}
            </p>
          </article>
        </li>
      );
    }
  }

  render(){
    return this._renderElement();
  }

/*  render(){
    const replyText = this.state.isReplying ? "Hide" : "Reply"
    const editIcon = this.state.isEditing ? "times" : "pencil"
    return  <li className="comment row collapse">
              <blockquote>
                <span className="label warning float-right hollow">{this.props.rank}</span>
                {this.props.body}
                <cite>
                  by: {this.props.author}
                </cite>
              </blockquote>
              <button className="button tiny hollow" onClick={this.onToggleReply.bind(this)}>{replyText}</button>
              <button className="button success tiny hollow" onClick={this.onUpvote.bind(this)}>+1</button>
              <button className="button warning tiny hollow" onClick={this.onToggleEdit.bind(this)}><span className={"fa fa-" + editIcon}></span></button>
              <button className="button danger tiny hollow" onClick={this.onCommentDeleted.bind(this)}>Delete comment</button>
              <CommentForm
                parent_id={this.props.id}
                isReplying={this.state.isReplying}
                isEditing={this.state.isEditing}
                body={this.state.body}
                author={this.state.author}
                onCommentSubmitted={this.onCommentSubmitted.bind(this)}
                onCommentEdited={this.onCommentEdited.bind(this)} />
              <ul>
                <CommentList parent_id={this.props.id} />
              </ul>
            </li>;
  }
*/
}

export default Comment
