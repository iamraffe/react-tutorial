import CommentForm from "../components/comment_form";
import CommentList from "../components/comment_list";

class Comment extends React.Component {
  static get propTypes() {
    return{
      id: React.PropTypes.number,
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      rank: React.PropTypes.number,
    }
  }

  render(){
    return  <li>
              <p>{this.props.body}</p>
              <p className="right"> By: {this.props.author}</p>
              <p> Rank: {this.props.rank}</p>
              <CommentForm parent_id={this.props.id} />
              <ul>
                <CommentList parent_id={this.props.id} />
              </ul>
            </li>;
  }
}

export default Comment
