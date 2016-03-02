import CommentForm from "../components/comment_form";
import CommentList from "../components/comment_list";

class Comment extends React.Component {
  constructor(){
    super()
    this.state = { isReplying: false }
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
    this.setState({isReplying: !this.state.isReplying})
  }

  onCommentSubmitted(event){
    this.setState({isReplying: false})
  }

  onUpvote(){
    this.context.actions.upvoteComment(this.props)
  }

  render(){
    const replyText = this.state.isReplying ? "Hide" : "Reply"
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
              <CommentForm 
                parent_id={this.props.id}
                isReplying={this.state.isReplying}
                onCommentSubmitted={this.onCommentSubmitted.bind(this)} />
              <ul>
                <CommentList parent_id={this.props.id} />
              </ul>
            </li>;
  }
}

export default Comment
