class CommentList extends React.Component{
  componentDidMount(){
    this.props.store.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount(){
    this.props.store.removeChangeListener(this._onChange.bind(this));
  }

  render(){
    console.log("rendering..");
    return(
      <div>
        {this.props.store.comments().map((comment) => {
         return <Comment key={comment.id} {... comment}/>;
        })}
      </div>
    );
  }

  _onChange(){
    this.forceUpdate();
  }
}

export default CommentList;
