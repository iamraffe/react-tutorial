import Comment from "../components/comment";
import React from 'react';

class CommentList extends React.Component{
  static get contextTypes(){
    return{
      store: React.PropTypes.object.isRequired
    }
  }

  componentDidMount(){
    this.context.store.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount(){
    this.context.store.removeChangeListener(this._onChange.bind(this));
  }

  render(){
    return  <li>
              <ul>
                {this.context.store.comments(this.props.parent_id).map((comment, i) => {
                 return <Comment key={i} {... comment}/>;
                })}
              </ul>
            </li>;
  }

  _onChange(){
    this.forceUpdate();
  }
}

export default CommentList;
