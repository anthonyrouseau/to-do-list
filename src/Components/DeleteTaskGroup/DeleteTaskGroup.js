import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTaskGroup } from '../../Actions/TaskGroup.js';

class DeleteTaskGroup extends Component {

  handleDeleteClicked() {
    this.props.dispatch(deleteTaskGroup(this.props.taskGroupId))
  }

  render() {
    return (
      <div>
        <button type='submit' onClick={() => this.handleDeleteClicked()}>
          Delete
        </button>
      </div>
    )
  }
}

export default connect()(DeleteTaskGroup)
