var CommentList = React.createClass({
  componentDidMount: function(){
    commentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    commentStore.removeChangeListener(this._onChange);
  },

  render: function(){
    console.log("rendering..");
    return(
      <div>
        {commentStore.comments().map(function(comment){
         return <Comment key={comment.id} {... comment}/>;
        })}
      </div>
    );
  },

  _onChange: function(){
    this.forceUpdate();
  }
});
