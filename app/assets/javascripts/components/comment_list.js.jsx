var CommentList = React.createClass({
  render: function(){
    return(
      <div>
        {[].map(function(comment){
         return <Comment key={comment.id} {... comment}/>;
        })}
      </div>
    );
  }
});