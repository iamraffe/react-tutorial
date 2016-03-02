class CommentForm extends React.Component{
  constructor(){
    super()
    this.defaultState = {id: 1, body: '', author: ''}
    this.state = this.defaultState
  }

  onFieldChange(event){
    let prop = {}
    prop[event.target.name] = event.target.value
    this.setState(prop)
  }

  submitComment(event){
    event.preventDefault()
    Actions.addComment(this.state)
  }

  render(){
    return  <form>
              <label>Author</label>
              <input type="text" name="author"  onChange={this.onFieldChange.bind(this)} value={this.state.author} />
              <label>Comment</label>
              <textarea name="body"  onChange={this.onFieldChange.bind(this)} value={this.state.body} />
              <button onClick={this.submitComment.bind(this)} type="submit">Submit</button>
            </form>
  }

}

export default CommentForm;
