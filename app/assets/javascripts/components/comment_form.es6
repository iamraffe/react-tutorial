class CommentForm extends React.Component{
  constructor(props){
    super()
    this.defaultState = { body: '', author: ''}
    this.state = this.defaultState
  }

  static get contextTypes(){
    return{
      actions: React.PropTypes.object.isRequired
    }
  }

  static get PropTypes(){
    return {
      onCommentSubmitted: React.PropTypes.func,
      isReplying: React.PropTypes.bool,
      parent_id: React.PropTypes.number
    }
  }

  onFieldChange(event){
    let prop = {}
    prop[event.target.name] = event.target.value
    this.setState(prop)
  }

  submitComment(event){
    event.preventDefault()
    this.context.actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id }))
    this.setState(this.defaultState)
    if(this.props.onCommentSubmitted){
      this.props.onCommentSubmitted()
    }
  }

  render(){
    return  <div>
              <form className={this.props.isReplying ? '' : 'hide'}>
                <label>Author</label>
                <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} />
                <label>Comment</label>
                <textarea name="body"  onChange={this.onFieldChange.bind(this)} value={this.state.body} />
                <button className="button hollow" onClick={this.submitComment.bind(this)} type="submit">Submit</button>
              </form>
            </div>;
  }

}

export default CommentForm;
