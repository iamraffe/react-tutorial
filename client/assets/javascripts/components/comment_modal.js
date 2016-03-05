import React from 'react';
import Modal from 'react-modal';
import CommentForm from "../components/comment_form";

const customStyles = {
  content : {
    top                   : '35%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minWidth             : '60%',
  }
}

class CommentModal extends React.Component{
  constructor(props){
    super()
    this.defaultState = ({ modalIsOpen: false })
    this.state = this.defaultState
  }

  onOpenModal() {
    this.setState({modalIsOpen: true})
  }

  onCloseModal() {
    this.setState(this.defaultState)
  }

  render() {
    return (
      <div>
        <button className="button pull-right"  onClick={this.onOpenModal.bind(this)}>Add item</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.onCloseModal.bind(this)}
          style={customStyles} >
          <h2>Add New Item</h2>
          <button className="close-button" onClick={this.onCloseModal.bind(this)}>
            <span aria-hidden="true">&times;</span>
          </button>
          <CommentForm onCloseModal={this.onCloseModal.bind(this)} />
        </Modal>
      </div>
    );
  }
}

export default CommentModal
