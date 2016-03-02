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
    console.log("rendering..");
    return(
      <div>
        {this.context.store.comments().map((comment) => {
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
