import Actions from "../actions";
import CommentStore from "../stores/comment_store";
import CommentList from "../components/comment_list";
import CommentForm from "../components/comment_form";
import CommentModal from "../components/comment_modal";
import React from 'react';


class CommentSection extends React.Component{
  constructor(props){
    super()
    this.store = new CommentStore()
    this.actions = new Actions(props.restaurantId)
    this.actions.setComments(props.comments)
  }

  static get childContextTypes(){
    return{
      store: React.PropTypes.object.isRequired,
      actions: React.PropTypes.object.isRequired
    }
  }

  getChildContext(){
    return {
      store: this.store,
      actions: this.actions
    }
  }

  render(){
    return <div className="comment-section">
              <div className="row">
                <CommentModal />
              </div>
              <ul>
                <CommentList parent_id={null} />
              </ul>
            </div>;
  }
}

// window.CommentSection = CommentSection;
export default CommentSection;
