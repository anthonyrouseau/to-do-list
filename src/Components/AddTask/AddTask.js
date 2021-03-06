import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../Actions/Task.js';

class AddTask extends Component {
  render() {
    let input
    return (
      <div>
        <form onSubmit= { e => {
            e.preventDefault()
            if (!input.value.trim()) {
              input.value = '';
              return
            }
            this.props.dispatch(addTask(input.value, this.props.currentGroup));
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTask)
