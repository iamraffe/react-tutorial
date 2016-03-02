class CommentForm extends React.Component{
  constructor(){
    super()
    this.defaultState = { body: '', author: ''}
    this.state = this.defaultState
  }

  static get contextTypes(){
    return{
      actions: React.PropTypes.func.isRequired
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
  }

  render(){
    return  <form>
              <label>Author</label>
              <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} />
              <label>Comment</label>
              <textarea name="body"  onChange={this.onFieldChange.bind(this)} value={this.state.body} />
              <button onClick={this.submitComment.bind(this)} type="submit">Submit</button>
            </form>;
  }

}

export default CommentForm;
