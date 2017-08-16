import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../Actions/Task.js';

class DeleteTask extends Component {

  handleDeleteClicked() {
    this.props.dispatch(deleteTask(this.props.taskId))
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={() => this.handleDeleteClicked()}>
          Delete
        </button>
      </div>
    );
  }
}


export default connect()(DeleteTask)
