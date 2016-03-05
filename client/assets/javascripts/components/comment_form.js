import React from 'react';
import _ from 'lodash';

class CommentForm extends React.Component{
  constructor(props){
    super()
    this.defaultState = {body: ""}
    this.state = this.defaultState
  }

  static get contextTypes(){
    return{
      actions: React.PropTypes.object.isRequired
    }
  }

  static get PropTypes(){
    return {
      onCloseModal: React.PropTypes.func
    }
  }

  onFieldChange(event){
    let prop = {}
    prop[event.target.name] = event.target.value
    this.setState(prop)
  }

  submitComment(event){
    event.preventDefault()
    this.context.actions.addComment(this.state)
    this.setState(this.defaultState)
    if(this.props.onCloseModal){
      this.props.onCloseModal()
    }
  }

  render(){
    return  <div>
              <form>
                <label>Comment</label>
                <textarea name="body"  onChange={this.onFieldChange.bind(this)} value={this.state.body} placeholder={this.state.body} />
                <button className='button hollow' onClick={this.submitComment.bind(this)} type="submit">Submit</button>
              </form>
            </div>;
  }

}

export default CommentForm;
