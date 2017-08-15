import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../Actions/TaskActions.js';

class AddTask extends Component {
  render() {
    let input
    return (
      <div>
        <form onSubmit= { e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch(addTask(input.value));
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
