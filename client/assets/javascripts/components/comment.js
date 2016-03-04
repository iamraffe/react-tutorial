import CommentForm from "../components/comment_form";
import CommentList from "../components/comment_list";
import React from 'react';

class Comment extends React.Component {
  constructor(){
    super()
    this.state = { isReplying: false, isEditing: false, body: "", author: "" }
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

  onToggleReply(){
    this.setState({isReplying: !this.state.isReplying, isEditing: false, body: "", author: ""})
  }

  onCommentSubmitted(event){
    this.setState({isReplying: false})
  }

  onUpvote(){
    this.context.actions.upvoteComment(this.props)
  }

  onCommentDeleted(){
    this.context.actions.deleteComment(this.props)
  }

  onToggleEdit(){
    this.setState({isEditing: !this.state.isEditing, isReplying: false, body: this.props.body, author: this.props.author})
  }

  onCommentEdited(event){
    this.setState({isEditing: false})
  }

  render(){
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
}

export default Comment
